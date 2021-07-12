const express = require('express');
const passport = require('passport');
const Comment = require('../../models/Comment');
const router = express.Router();

router.post('/:adId', 
passport.authenticate('jwt', { session: false }),
async (req, res) => {
    const newComment = new Comment({
        message: req.body.message,
        user: req.user
    })
    await newComment.save();
    return res.json(newComment);
})

module.exports = router;