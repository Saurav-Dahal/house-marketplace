const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../Model/userSchema');

const protectRoute = asyncHandler(async(req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1];
            const decode = jwt.verify(token, 'secretKey');
            req.user = await User.findById(decode.id).select('-password');
            next();
        }catch(e) {
            res.status(401);
            throw new Error('Not Authorized');
        }  
    }else{
        res.status(401);
        throw new Error('Not Authorized');
    }
}
)


module.exports = protectRoute; 