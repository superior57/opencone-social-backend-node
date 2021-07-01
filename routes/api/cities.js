const express = require('express');
const City = require('../../models/City');
const router = express.Router();
const ValidateCityInput = require("../../validation/city");
const { route } = require('./categories');

router.get('/test', (req, res) => {
    return res.json({
        msg: "City test works"
    })
})

/**
 * Get All Cities
 */
router.get('/', 
async (req, res) => {
    const cities = await City.find().populate('subCities');
    return res.json(cities);
})

/**
 * Add New City
 */
router.put('/', 
async (req, res) => {
    const { errors, isValid } = ValidateCityInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newCity = new City({
        name: req.body.name
    });
    await newCity.save();
    return res.json(newCity);
})

/**
 * Update City
 */
router.post('/:id', 
async (req, res) => {
    try {
        const city = await City.findById(req.params.id);
        const { errors, isValid } = ValidateCityInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        city.name = req.body.name;
        await city.save();
        return res.json(city);    
    } catch (error) {
        return res.status(400).json({
            citynotfound: 'No city found'
        })        
    }
})

/**
 * Delete City
 */
router.delete('/:id', 
async (req, res) => {
    try {
        const city = await City.findById(req.params.id);
        await city.remove();    
        return res.json({
            success: true
        })
    } catch (error) {
        return res.status(400).json({
            citynotfound: 'No city found'
        })        
    }
})

module.exports = router;