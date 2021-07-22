const express = require('express');
const Ad = require('../../models/Ad');
const Category = require('../../models/Category');
const SubCategory = require('../../models/SubCategory');
const router = express.Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const ValidateAdInput = require("../../validation/ad");
const passport = require('passport');
const User = require('../../models/User');
const City = require('../../models/City');
const SubCity = require('../../models/SubCity');
const Field = require('../../models/Field');
const Comment = require('../../models/Comment');
const user = require('../../validation/user');

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
    // if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    // } else {
    //   cb(null, false);
    //   return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    // }
  }
});

populates = [
  "category", 
  "user", 
  "city", 
  {
    path: "sub_category",
    populate: {
      path: "category"
    }
  },
  {
    path: "subCity",
    populate: {
      path: "city"
    }
  },
  {
    path: "comments",
    populate: {
      path: "user"
    },
    options: {
      sort: {
        date: -1
      }
    }
  },
]

router.get('/test', 
passport.authenticate('jwt', { session: false }),
(req, res) => {
    return res.json({
        msg: "Ad test works"
    })
})

/**
 * Add New AD
 */
  router.put('/', 
  passport.authenticate('jwt', { session: false }), 
  upload.array('images', 10), 
  async (req, res) => {
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
          const city = await City.findById(req.body.city);
          const subCity = await SubCity.findById(req.body.subCity);
          const user = await User.findById(req.user._id);
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
              currency: req.body.currency,
              user,
              city,
              subCity
          });
          newAd.save();
          return res.json(newAd);
      } catch (error) {
          return res.status(400).json({
              categoryorsubcategorynotfound: "No Category or SubCategory found"
          })        
      }
  })

  /**
   * Search Ads
   */
  router.post('/', 
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { category, subCategory, specs, price, city, subCity } = req.body;
    const filter = {};
    if (subCategory) filter.sub_category = subCategory;
    else if (category) filter.category = category;

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
      if (price.from) filter.price = { $gte: price.from }
      if (price.to) filter.price = { ...filter.price, $lte: price.to }
    }   
    if (city) filter.city = city
    if (subCity) filter.subCity = subCity
    
    
    try {
      const ads = await Ad.find(filterValidation(filter))
      .populate(['sub_category', 'user', 'category'])
      .sort({ date: -1 });
      
      return res.json(ads)
    } catch (error) {
      console.log(error);
    }
  })

  const filterValidation = filter => {
    const returnFilters = {};
    Object.keys(filter).forEach(f => {
      if (typeof filter[f] !== 'object' || (Object.keys(filter[f]).length > 0 || filter[f].length > 0)) {
        returnFilters[f] = filter[f];
      }
    })
    return returnFilters;
  }

  const getFieldNameById = async (fieldId) => {
    try {
      const field = await Field.findById(fieldId);
      return field.name;
    } catch (error) {
      console.log(error);
      return {
        error: {
          fieldnotfound: "No field found"
        }
      }      
    }
  }

  const getFieldData = async (specs) => {
    const resObj = await Promise.all(Object.keys(specs).map(async (fieldId) => {
      const fData = specs[fieldId];
      const name = await getFieldNameById(fieldId);
      return {
        title: name,
        value: fData
      }
    }))
    return resObj;
  }

/**
 * Get Ad Details
 */
router.get('/:id', async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id)
    .populate(populates)
    
    if (ad.specs) {
      const fieldData = await getFieldData(ad.specs);
      ad._doc.fieldData = fieldData;    
    }
    return res.json(ad);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      adnotfound: "No ad found"
    })    
  }
});

/**
 * Update Ad
 */
router.post('/:id', async (req, res) => {
  const ad = await Ad.findById(req.params.id)
  .populate(populates);
  if (ad) {
    Object.keys(req.body).forEach(key => {
      ad[key] = req.body[key];
    });
    await ad.save();
    if (req.body.boost) {
      const user = await User.findById(ad.user);
      user.boost_credits = user.boost_credits - 1;
      await user.save();
      return res.json(ad);
    }
    return res.json(ad);
  } else {
    return res.status(400).json({
      cannotfindad: "No Ad find"
    })
  }
})

// router.post('/boost/:id', async (req, res) => {
//   const ad = await Ad.findById(req.params.id);
//   if (ad) {

//   }
// })

router.post('/comments/:adId', 
passport.authenticate('jwt', { session: false }),
async (req, res) => {
  const ad = await Ad.findById(req.params.adId);
  const newComment = new Comment({
    ad,
    message: req.body.message,
    user: req.user
  })
  await newComment.save();
  ad.comments.push(newComment);
  await ad.save();
  const updatedAd = await Ad.findById(req.params.adId).populate(populates);
  return res.json(updatedAd);
})

router.post('/likes/:adId', 
passport.authenticate('jwt', { session: false }),
async (req, res) => {
  const ad = await Ad.findById(req.params.adId);
  ad.likes.push(req.user);
  await ad.save();
  const user = await User.findById(req.user._id);
  user.like_ads.push(ad);
  await user.save();
  const updatedAd = await Ad.findById(req.params.adId).populate(populates);
  return res.json(updatedAd);
})

module.exports = router;