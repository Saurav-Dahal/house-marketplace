const express = require("express");
const router = express.Router();
const users = require("../Model/userSchema");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post('/signup', async (req, res) => {

    console.log(req.body);

    // try {
    //     console.log(req.body);
    // } catch (error) {
        
    // }
    
});
//     bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
//       req.body.password = hash;
//       const data = users.create(req.body);
//       if (data) {
//         res.json({
//           msg: "Request has been sent successfully",
//         });
//       }
//     });
//   }
//   );

  module.exports = router;