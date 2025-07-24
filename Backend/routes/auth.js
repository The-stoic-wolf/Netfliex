const express = require('express');
const router = express.Router();
const user = require('../models/User');
const bcrypt = require('bcryptjs');

router.post('/signup',async(req,res)=>{
    try {
       const {email,password} = req.body;

       const existingUser = await user.findOne({email})
       if(existingUser){
        return res.status(400).json({error:'user already exist with this email'});
       }
       const salt = await bcrypt.genSalt(10);
       const hashpassword = await bcrypt.hash(password, salt);

       const Newuser = new user({
        email,
        password: hashpassword
       });
       await Newuser.save();
       res.status(201).json({message:'User created successfully'})
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;