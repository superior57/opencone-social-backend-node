const express = require('express');
const Ad = require('../../models/Ad');
const Category = require('../../models/Category');
const SubCategory = require('../../models/SubCategory');
const router = express.Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const ValidateAdInput = require("../../validation/ad");

const DIR = 'uploads/ads/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, uuidv4() + '-' + fileName)
  }
});
   
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  }
  }
});

router.get('/test', (req, res) => {
    return res.json({
        msg: "Ad test works"
    })
})

router.put('/', upload.array('images', 10), async (req, res) => {
    try {        
        const { errors, isValid } = ValidateAdInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const images = [];
        req.files?.forEach(file => {
            images.push("/ads/" + file.filename);
        })

        const category = await Category.findById(req.body.category);
        const subCategory = await SubCategory.findById(req.body.subCategory);
        const newAd = new Ad({
            title: req.body.title,
            description: req.body.description,
            category,
            sub_category: subCategory,
            contact_name: req.body.contactName,
            contact_email: req.body.contactEmail,
            specs: JSON.parse(req.body.specs),
            images
        });
        newAd.save();
        return res.json(newAd);
    } catch (error) {
        return res.status(400).json({
            categoryorsubcategorynotfound: "No Category or SubCategory found"
        })        
    }
})

module.exports = router;