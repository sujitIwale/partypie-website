const express = require('express');
const { body } = require('express-validator');
const router =express.Router();
const {check,validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

//@route    POST api/users
//@desc     register a user
//@acces    public
const User =require('../models/User');

router.post('/',
[
   check('name' , 'please enter your name')
   .not()
   .isEmpty(),
   check('email','please enter a valid email').isEmail(),
   check('password','please enter a password of minimun 6 characters').isLength({min:6})
],
async (req,res) => { 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
       return res.status(400).json({errors:errors.array()});
    }
    const {name,email,password} = req.body;
    try {
        let user = await User.findOne({email});
        if (user) {
            return res.status(400).json({msg:"user already exist"})
        }
        user = new User({
            name,
            email,
            password
        })
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);

        await user.save();
    
        const payload = {
            user:{
                id:user.id
            }
        }
        jwt.sign(payload,
                 config.get("jwtSecret"),
                {
                    expiresIn:360000
                },
                (err,token) =>{
                    if (err) throw err;
                    res.json({token});
                }
                );
    } catch (err) {
        console.log(err.message)
        res.send('server error')
    }
})

module.exports = router;