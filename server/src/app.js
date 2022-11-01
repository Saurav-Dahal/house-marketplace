const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
require("dotenv").config();
const mongoose = require('mongoose');

const bcrypt = require("bcrypt");
const saltRounds = 10;

const Users = require("./Model/userSchema");


const connect = require("./db/mongoose");
connect();

// const userRouter = require("./Controller/userRouter");

// app.use('/api/', userRouter);

  
const hostname = '127.0.0.1';
const port = 3001;
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

  app.post('/api/signup', async (req, res) => {
    console.log(req.body);
    try {
          bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
            req.body.password = hash;
  
            const data = await Users.create(req.body);
            if (data) {
              res.json({
                msg: "User added successfully.",
              });
            }
          });
        } catch (error) {
              res.json('There is some problem adding user.');
            }
    
});

  app.post('/api/signin', async(req,res) =>{
    const userData = Users.findOne({email: req.body.email}, function (error, data){
      if(error) console.log(error)
      if(data){
        bcrypt.compare(req.body.password, data.password, function(err, result){
          if(err) console.log(err)
          if(result){
            res.status(200).send({isLoggedIn: true});
          }
        });
      }
    });
  })
