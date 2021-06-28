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
        field.specs.push(newFieldSpec);
        await field.save();
        return res.json(newFieldSpec);
    } catch (error) {
        return res.status(400).json({
            fieldspecnotfound: "No Field found"
        });
    }
})

/**
 * Update Field Spec
 */
 router.post('/:id', async (req, res) => {
    try {
        const { errors, isValid } = ValidateFieldSpecInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }        
        const fieldSpec = await FieldSpec.findById(req.params.id);
        fieldSpec.name = req.body.name;
        await fieldSpec.save();
        return res.json(fieldSpec);
    } catch (error) {
        return res.status(400).json({
            fieldspecnotfound: "No Field Spec found"
        })        
    }   
})

/**
 * Delete Field Spec
 */
router.delete('/:id', async (req, res) => {
    try {
        const fieldSpec = await FieldSpec.findById(req.params.id);
        await fieldSpec.remove();
        return res.json({
            success: true
        });
    } catch (error) {
        return res.status(400).json({
            fieldspecnotfound: "No Field Spec found"
        })
    }
})

module.exports = router;