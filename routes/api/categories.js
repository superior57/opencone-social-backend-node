const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Category model
const Category = require('../../models/Category');

// Validation
const validateCategoryInput = require('../../validation/category');

// @route   GET api/categories/test
// @desc    Tests category route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Categories Works' }));

// @route   GET api/categories
// @desc    Get categories
// @access  Public
router.get('/', (req, res) => {
  Category.find()
    .sort({ date: -1 })
    .then(categories => res.json(categories))
    .catch(err => res.status(404).json({ nocategoriesfound: 'No categories found' }));
});

// @route   GET api/categories/:id
// @desc    Get category by id
// @access  Public
// router.get('/:id', (req, res) => {
//   Category.findById(req.params.id)
//     .then(category => res.json(category))
//     .catch(err =>
//       res.status(404).json({ nocategoryfound: 'No category found with that ID' })
//     );
// });

// @route   POST api/categories
// @desc    Create category
// @access  Private
router.post(
  '/',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCategoryInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newCategory = new Category({
      name: req.body.name,
    });

    newCategory.save().then(category => res.json(category));
  }
);

/**
 * Update Category
 * @route POST api/categories/:id
 * @param id
 */
router.post(
  '/:id',
  // passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateCategoryInput(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const category = await Category.findOne({ _id: req.params.id });
    category.name = req.body.name;    
    await category.save();
    return res.json(category);
  }
)

// @route   DELETE api/categories/:id
// @desc    Delete category
// @access  Private
router.delete(
  '/:id',
  // passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      await category.remove();
      return res.json({ success: true });
    } catch (error) {
      return res.status(404).json({ categorynotfound: 'No category found' });
    }
  }
);

// @route   POST api/categories/like/:id
// @desc    Like category
// @access  Private
router.post(
  '/like/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Category.findById(req.params.id)
        .then(category => {
          if (
            category.likes.filter(like => like.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyliked: 'User already liked this category' });
          }

          // Add user id to likes array
          category.likes.unshift({ user: req.user.id });

          category.save().then(category => res.json(category));
        })
        .catch(err => res.status(404).json({ categorynotfound: 'No category found' }));
    });
  }
);

// @route   POST api/categories/unlike/:id
// @desc    Unlike category
// @access  Private
router.post(
  '/unlike/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Category.findById(req.params.id)
        .then(category => {
          if (
            category.likes.filter(like => like.user.toString() === req.user.id)
              .length === 0
          ) {
            return res
              .status(400)
              .json({ notliked: 'You have not yet liked this category' });
          }

          // Get remove index
          const removeIndex = category.likes
            .map(item => item.user.toString())
            .indexOf(req.user.id);

          // Splice out of array
          category.likes.splice(removeIndex, 1);

          // Save
          category.save().then(category => res.json(category));
        })
        .catch(err => res.status(404).json({ categorynotfound: 'No category found' }));
    });
  }
);

// @route   POST api/categories/comment/:id
// @desc    Add comment to category
// @access  Private
router.post(
  '/comment/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCategoryInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    Category.findById(req.params.id)
      .then(category => {
        const newComment = {
          text: req.body.text,
          name: req.body.name,
          avatar: req.body.avatar,
          user: req.user.id
        };

        // Add to comments array
        category.comments.unshift(newComment);

        // Save
        category.save().then(category => res.json(category));
      })
      .catch(err => res.status(404).json({ categorynotfound: 'No category found' }));
  }
);

// @route   DELETE api/categories/comment/:id/:comment_id
// @desc    Remove comment from category
// @access  Private
router.delete(
  '/comment/:id/:comment_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Category.findById(req.params.id)
      .then(category => {
        // Check to see if comment exists
        if (
          category.comments.filter(
            comment => comment._id.toString() === req.params.comment_id
          ).length === 0
        ) {
          return res
            .status(404)
            .json({ commentnotexists: 'Comment does not exist' });
        }

        // Get remove index
        const removeIndex = category.comments
          .map(item => item._id.toString())
          .indexOf(req.params.comment_id);

        // Splice comment out of array
        category.comments.splice(removeIndex, 1);

        category.save().then(category => res.json(category));
      })
      .catch(err => res.status(404).json({ categorynotfound: 'No category found' }));
  }
);

module.exports = router;
