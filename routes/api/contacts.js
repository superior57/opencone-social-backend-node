const express = require('express');
const passport = require('passport');
const Contact = require('../../models/Contact');
const User = require('../../models/User');
const router = express.Router();

router.get('/test', (req, res) => {
    return res.json({
        msg: "Chatuser test works"
    })
})

/**
 * Add contact
 */
router.put('/', 
passport.authenticate('jwt', { session: false }),
async (req, res) => {
    const receiver = await User.findById(req.body.receiverId);
    if (receiver) {
        const newContact = new Contact({
            receiver,
            user: req.user
        });
        await newContact.save();
        return res.json(newContact);
    } else {
        return res.status(400).json({
            receivernotfound: "No Receiver found"
        }) 
    }
})

/**
 * Get Contacts
 */
router.get('/', 
passport.authenticate('jwt', { session: false }),
async (req, res) => {
    try {
        const contacts = await Contact.find({
            user: req.user
        }).populate("receiver");
        return res.json(contacts);
    } catch (error) {
        return res.status(400).json({
            receivernotfound: "No Receiver found"
        })        
    }
})

module.exports = router;