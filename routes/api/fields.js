const express = require("express");
const router = express.Router();

const Field = require("../../models/Field");
const ValidateFieldInput = require("../../validation/field");

router.get('/test', (req, res) => {
    return res.json({
        msg: "Field test works"
    })
})

/**
 * Get All Fields
 */
router.get('/', async (req, res) => {
    try {
        const fields = await Field.find();
        return res.json(fields);
    } catch (error) {
        return res.status(400).json({
            fieldnotfound: "No Field found"
        })
    }
})

/**
 * Add New Field
 */
router.put('/', async (req, res) => {
    const { errors, isValid } = ValidateFieldInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newField = new Field({
        name: req.body.name,
        type: req.body.type
    });
    await newField.save();
    return res.json(newField);
})

/**
 * Update Field
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
 * Delete Field
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