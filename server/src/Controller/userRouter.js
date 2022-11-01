// const express = require("express");
// const router = express.Router();
// const Users = require("../Model/userSchema");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;

// router.post('/signup', async (req, res) => {
//     console.log(req.body);
//     try {
//           bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
//             req.body.password = hash;
  
//             const data = await Users.create(req.body);
//             if (data) {
//               res.json({
//                 msg: "User added successfully.",
//               });
//             }
//           });
//         } catch (error) {
//               res.json('There is some problem adding user.');
//             }
    
// });

// router.post('/signin', async(req,res) =>{
//   console.log(req.body);
//   const userData = Users.findOne({email: req.body.email}, function (error, data){
//     if(error) console.warn(error)
//     if(data){
//       bcrypt.compare(re.body.password, data.password, function(err, result){
//         if(err) console.warn(err)
//         if(result){
//           res.statusCode(200).send({isLoggedIn: true});
//         }
//       });
//     }
//   });
// })

//   module.exports = router;