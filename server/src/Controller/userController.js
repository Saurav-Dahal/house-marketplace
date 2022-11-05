const express = require("express");
const Users = require("../Model/userSchema");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');


  //Generate Token
  const generateToken = (id) =>{
    return jwt.sign({id}, 'secretKey', {expiresIn: '1h'} );
  }

  const signUpUser = asyncHandler(async(req, res) =>{
    const {name, email, password} = req.body;

        if(!name || !email || !password){
          res.status(400);
          throw new Error('Please include all fields.');
        }
        
        const userInDb = await Users.findOne({ email });
    
        if (userInDb) {
          res.status(400);
          throw new Error('Email already exists.');
        } 
    
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = await Users.create({name, email, password:hashedPassword});

        if (user) {
          res.status(201).json({
            ok: true,
            message: "User added successfully.",
          });
        }else{
          res.status(400).json({message: "Invalid data."});
        }

      } 
  )


  const signInUser = asyncHandler( async(req,res) =>{
    const {email, password} = req.body;

    const userData = await Users.findOne({email});
      if(userData && (await bcrypt.compare(password, userData.password))){
        res.status(200).json({
          id: userData.id,
          name: userData.name,
          email: userData.email,
          token: generateToken(userData.id),
        })
      }else{
        res.status(400).json({message: "Invalid username and password."});
      }
  })


  module.exports = {signUpUser, signInUser};