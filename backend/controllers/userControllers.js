
const asyncHandler = require ('express-async-handler')
const User = require ('../models/userModel');
//const generateToken = require('../utils/generateToken');

const registerUser = (async (req, res) => {

    const {name, email,password} =req.body;


const userExists= await User.findOne({email});


if (userExists) {
res.status(400);
throw new Error ("User Already Exists");

}


const user = await User.create({

    name, email,password

});


if(user){
res.status(201).json({

    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    //token:generateToken(user._id),
});
}else {

res.status(400);
throw new Error ("Error Occcured..!");

}

});

module.exports={registerUser};