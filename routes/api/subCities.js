const express = require('express');
const City = require('../../models/City');
const SubCity = require('../../models/SubCity');
const router = express.Router();
const ValidateSubCityInput = require("../../validation/subCity");

router.get('/test', (req, res) => {
    return res.json({
        msg: "Sub City test works"
    })
})

/**
 * Get All Sub Cities
 */
router.get('/:cityId', 
async (req, res) => {
    const subCities = await SubCity.find({
        city: req.params.cityId
    });
    return res.json(subCities);
})

/**
 * Add New Sub City
 */
router.put('/:cityId', 
async (req, res) => {
    try {
        const city = await City.findById(req.params.cityId);
        const { errors, isValid } = ValidateSubCityInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        
        const newSubCity = new SubCity({
            name: req.body.name,
            city: city
        });        
        await newSubCity.save();
        city.subCities.push(newSubCity._id);
        await city.save();
        
        return res.json(newSubCity);
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            citynotfound: "No city found"
        })
    }
})

/**
 * Update Sub City
 */
router.post('/:id', 
async (req, res) => {
    try {
        const subCity = await SubCity.findById(req.params.id);
        const { errors, isValid } = ValidateSubCityInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        subCity.name = req.body.name;
        await subCity.save();
        return res.json(subCity);    
    } catch (error) {
        return res.status(400).json({
            subcitynotfound: 'No sub city found'
        })        
    }
})

/**
 * Delete Sub City
 */
router.delete('/:id', 
async (req, res) => {
    try {
        const subCity = await SubCity.findById(req.params.id);
        const city = await City.findById(subCity.city);
        city.subCities.pull(subCity);
        await city.save();
        await subCity.remove();    
        return res.json({
            success: true
        })
    } catch (error) {
        return res.status(400).json({
            subcitynotfound: 'No sub city found'
        })        
    }
})

module.exports = router;