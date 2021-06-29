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

/**
 * Add New AD
 */
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
            images,
            price: req.body.price,
            currency: req.body.currency
        });
        newAd.save();
        return res.json(newAd);
    } catch (error) {
        return res.status(400).json({
            categoryorsubcategorynotfound: "No Category or SubCategory found"
        })        
    }
})

router.post('/', async (req, res) => {
  const {
    category,
    subCategory,
    specs,
    price
  } = req.body;

  const filter = {};
  if (subCategory) {
    filter.sub_category = subCategory;
  }

  if (specs) {
    Object.keys(specs).forEach(spec => {
      if (specs[spec].from || specs[spec].to) {
        filter[`specs.${spec}`] = {
          $gte: specs[spec].from !== '' ? specs[spec].from : '0',
          $lte: specs[spec].to !== '' ? specs[spec].to : '2100'
        };
      } else {        
        filter[`specs.${spec}`] = specs[spec];
      }
    })
  }
  if (price) {      
    if (price.from) 
      filter.price = {
        $gte: price.from
      }
    if (price.to) 
      filter.price = {
        ...filter.price,
        $lte: price.to
    }
  }
  const newFilters = {};
  Object.keys(filter).forEach(f => {
    if (typeof filter[f] !== 'object' || (Object.keys(filter[f]).length > 0 || filter[f].length > 0)) {
      newFilters[f] = filter[f];
    }
  })
  try {
    const ads = await Ad.find(newFilters).populate('sub_category').sort({
      date: -1
    });
    return res.json(ads)
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;