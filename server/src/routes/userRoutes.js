const express = require("express");
const router = express.Router();
const {signUpUser, signInUser} = require('../Controller/userController');
const protectRoute = require('../middleware/authMiddleware');


router.post('/signup',  signUpUser);
router.post('/signin', signInUser);
// router.get('/check', protectRoute, justCheck);


module.exports = router;