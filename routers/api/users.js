const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const passport = require('passport')
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const validateResgisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// User Register API
// Type Post with route /res
router.post('/res',(req,res) => {
    const {err, isValid } = validateResgisterInput(req.body);
    if(!isValid) {
        return res.status(400).json(err);
    }
    let email = req.body.email;
    User.findOne({email:email})
    .then( user => {
        if(user) {
            return res.send("User already exist");
        }
        else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                password1: req.body.password1
            });
            bcrypt.genSalt(10,(err,salt) => {
                bcrypt.hash(newUser.password, salt, (err,hash) => {
                    if(err) console.log(err);
                    newUser.password = hash;
                    newUser.save()
                    .then( user => {
                        res.json(user)
                    })
                    .catch( err => console.log(err));
                })
            })
        }
    })
});

// User Login after Register
// Type Post with @route /login
router.post('/login', (req,res) => {
    const {err, isValid } = validateLoginInput(req.body);
    if(!isValid) {
        res.status(400).json(err);
    };
    const email = req.body.email
    User.findOne({email:email})
    .then( user => {
        if(!user) {
            err.email = 'User Not found'
            return res.json(err)
        }
        bcrypt.compare(password, user.password)
        .then( isMatch => {
            if(isMatch) {
                const payload = {
                    id: user.id,
                    name: user.name,
                }
                jwt.sign(payload,keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
                    res.json({
                        sucess: 'true',
                        token: 'Bearer ' + token
                    })
                })
            }
            else {
                err.password = 'Password incorrect'
                return res.status(400).json(err)
            }
        })
        .catch( err => res.send(err))
    })
});


module.exports = router;