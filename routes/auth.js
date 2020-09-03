const express = require('express');
const router =express.Router();
const auth  = require('../middleware/auth');
const {check,validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');


const User =require('../models/User');

//@route    get api/auth
//@desc     login a user
//@acces    private
router.get('/',auth, async (req,res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
})

//@route    POST api/auth
//@desc     auth and log in 
//@acces    public
router.post('/',
   [
      check('email','Enter a valid email').isEmail(),
      check('password','Enter  a valid password').exists()
   ],
async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
       return res.status(400).json({error:errors.array()});
    }
    const {email,password} = req.body;

    try {
        const user = await User.findOne({email});
        if (!user) {
            res.status(400).json({msg:"invalid Credentials"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) {
            res.status(400).json({msg:'Invalid Password'})
        }
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
        console.log(err.message);
        console.log('server error happens')
        res.send('Server Error');
    }
})

module.exports = router;
