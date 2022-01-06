const User=require('../models/user');
const ErrorHandler=require('../utils/errorhandler');
const sendToken = require( "../utils/jwtToken" );

exports.registerUser=async(req,res,next)=>{
    const {name,email,password}=req.body;
    const user=await User.create({
        name,email,password
    })
    res.status( 200 ).json( {
        success: true,
        message:"Register",
    })
};

exports.getUser=()=>{
    res.status( 200 ).json( {
        success: true,
        message:"Register",
    })
}
exports.loginUser=async(req,res,next)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email}).select("+password");
    if(!user)
    {
        return next( new ErrorHandler( "invalid Email or Password", 401 ) );

    }
    const isPasswordMatched = await user.comparePassword( password );
    if ( !isPasswordMatched )
    {
        return next( new ErrorHandler( "invalid Email or Password", 401 ) );

    }
    
    sendToken( user, 200, res );
        
};

exports.logout =  async ( req, res, next ) =>
{
    res.cookie( "token", null, {
        expires: new Date( Date.now() ),
        httpOnly:true,
    })
    res.status( 200 ).json( {
        success: true,
        message:"Logged Out",
    })
}