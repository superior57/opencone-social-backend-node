const express = require('express');
const router = express.Router();

const FieldSpec = require("../../models/FieldSpec");
const Field = require("../../models/Field");
const ValidateFieldSpecInput = require("../../validation/fieldSpec");

router.get('/test', (req, res) => {
    return res.json({
        msg: "Field spec test works"
    })
})

/**
 * Get All Field Specs
 */
 router.get('/:fieldId', async (req, res) => {
    try {
        const field = await Field.findById(req.params.fieldId);
        
        try {
            const fieldSpecs = await FieldSpec.find({
                field: field
            });
            return res.json(fieldSpecs);
        } catch (error) {
            return res.status(400).json({
                fieldspecnotfound: "No Field Specs found"
            })        
        }
    } catch (error) {
        return res.status(400).json({
            fieldnotfound: "No Field found"
        });
    }
})

/**
 * Add New Field Spec
 */
router.put('/:fieldId', async (req, res) => {
    try {
        const field = await Field.findById(req.params.fieldId);        
        const { errors, isValid } = ValidateFieldSpecInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newFieldSpec = new FieldSpec({
            name: req.body.name,
            field: field
        });
        await newFieldSpec.save();
        return res.json(newFieldSpec);
    } catch (error) {
        return res.status(400).json({
            fieldspecnotfound: "No Field Spec found"
        });
    }
})

/**
 * Update Field Spec
 */
 router.post('/:id', async (req, res) => {
    const { errors, isValid } = ValidateFieldInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    try {
        const field = await Field.findById(req.params.id);
        field.name = req.body.name;
        field.type = req.body.type;
        await field.save();
        return res.json(field);
    } catch (error) {
        return res.status(400).json({
            fieldnotfound: "No Field found"
        })
    }
})

/**
 * Delete Field Spec
 */
router.delete('/:id', async (req, res) => {
    try {
        const field = await Field.findById(req.params.id);
        await field.remove();
        return res.json({
            success: true
        });
    } catch (error) {
        return res.status(400).json({
            fieldnotfound: "No Field found"
        })
    }
})

module.exports = router;