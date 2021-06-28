const express = require('express');
const router = express.Router();


const SubCategory = require("../../models/SubCategory");
const Category = require("../../models/Category");
const Field = require("../../models/Field");
const ValidateSubCategoryInput = require("../../validation/subCategory");

router.get('/test', (req, res) => {
    return res.json({
        msg: "SubCategory Test works"
    })
})

/**
 * get sub categories
 * @param categoryId
 */
router.get('/:categoryId', async (req, res) => {
    try {
        const category = await Category.findById(req.params.categoryId);
        
        try {
            const subCategories = await SubCategory.find({
                category: category
            });
            return res.json(subCategories);
        } catch (error) {
            return res.status(400).json({
                subcategorynotfound: "No Sub Category found"
            })        
        }
    } catch (error) {
        return res.status(400).json({
            categorynotfound: "No Category found"
        });
    }
});

/**
 * Add New Sub Category
 * @param categoryId
 */
router.put('/:categoryId', async (req, res) => {
    try {
        const category = await Category.findById(req.params.categoryId);        
        const { errors, isValid } = ValidateSubCategoryInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newSubCategory = new SubCategory({
            name: req.body.name,
            category: category
        });
        const subCategory = await newSubCategory.save();
        return res.json(subCategory);
    } catch (error) {
        return res.status(400).json({
            categorynotfound: "No Category found"
        });
    }    
})

/**
 * Add New Sub Category
 * @param id
 */
router.post('/:id', async (req, res) => {      
    try {
        const { errors, isValid } = ValidateSubCategoryInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }        
        const subCategory = await SubCategory.findById(req.params.id);
        subCategory.name = req.body.name;
        await subCategory.save();
        return res.json(subCategory);
    } catch (error) {
        return res.status(400).json({
            subcategorynotfound: "No Sub Category found"
        })        
    }    
})

router.delete('/:id', async (req, res) => {
    try {    
        const subCategory = await SubCategory.findById(req.params.id);
        await subCategory.remove();
        return res.json({ success: true });
    } catch (error) {
        return res.status(400).json({
            subcategorynotfound: "No Sub Category found"
        })        
    }  
})

/**
 * Get SubCategory
 */
router.get('/details/:id', async (req, res) => {
    try {
        const subCategory = await SubCategory.findById(req.params.id).populate({
            path: 'fields',
            populate: {
                path: 'specs'
            }
        });
        return res.json(subCategory);
    } catch (error) {
        return res.status(400).json({
            subcategorynotfound: "No Sub Category found"
        })        
    }
})

/**
 * Add Field to SubCategory
 */
router.post('/add-field/:subCategoryId/:fieldId', async (req, res) => {
    const { fieldId, subCategoryId } = req.params;
    try {
        const field = await Field.findById(fieldId);
        try {
            const subCategory = await SubCategory.findById(subCategoryId);
            if (!subCategory.fields.includes(fieldId)) {
                subCategory.fields.push(field);
                await subCategory.save();
                return res.json(field);
            }
            return res.status(400).json({
                fieldalreadyexists: "Field already exists"
            })
        } catch (error) {
            return res.status(400).json({
                subcategorynotfound: "No Sub Category found"
            })            
        }
    } catch (error) {
        return res.status(400).json({
            fieldnotfound: "No Field found"
        })        
    }
})

/**
 * Delete Field from SubCategory
 */
router.post('/delete-field/:subCategoryId/:fieldId', async (req, res) => {
    const { fieldId, subCategoryId } = req.params;
    try {
        const field = await Field.findById(fieldId);
        try {
            const subCategory = await SubCategory.findById(subCategoryId);
            if (subCategory.fields.includes(fieldId)) {
                subCategory.fields.pull(field);
                await subCategory.save();
                return res.json(field);
            }
            return res.status(400).json({
                fielddoesnotexists: "Field does not exists" 
            })
        } catch (error) {
            return res.status(400).json({
                subcategorynotfound: "No Sub Category found"
            })            
        }
    } catch (error) {
        return res.status(400).json({
            fieldnotfound: "No Field found"
        })        
    }
})

module.exports = router;