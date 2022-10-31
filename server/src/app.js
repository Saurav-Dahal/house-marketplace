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

const users = require("./Model/userSchema");


// const connect = require("./db/mongoose");
// connect();

// const userRouter = require("./Controller/userRouter");

// app.use('/signup', userRouter);

  
const hostname = '127.0.0.1';
const port = 3001;
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

// const UserSchema = new mongoose.Schema(
//     {
//         name: {type: String, required: true},
//         email: {type: String, unique: true, required: true},
//         password: {type: String, required: true},
//     },
//     {
//         collection: "users"
//     }
// );

// const Users = mongoose.model('UserModel', UserSchema);



app.post('/signup', async(req, res)=>{
    try {
        bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
            req.body.password = hash;
            debugger;
            const data = await users.create(req.body);
            if (data) {
              res.json({
                msg: "Request has been sent successfully",
              });
            }
          });
    } catch (error) {
        res.json('There is some problem.');
    }
        
});

