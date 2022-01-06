const mongoose =require('mongoose');
const validator=require('validator');
const jwt=require('jsonwebtoken');
const crypto=require('crypto');
const bcrypt = require( 'bcryptjs' );

const userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "Please Enter Your Name" ],
        maxlength: [ 30, "Name Cannot exceed 30 characters" ],
        minlength: [ 4, "Name Should have 4 characters" ],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [ validator.isEmail, 'Please Enter a Valid Email' ],

    },
    password: {
        type: String,
        required: [ true, "Please Enter Your Password" ],
        minlength: [ 8, "Password Should be Greater than 8 Characters " ],
        select: false,
    },
    role: {
        type: String,
        default: 'user',
    },
    createdAt: {
        type: Date,
        default:Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
} );
userSchema.pre('save',async function(next)
{
    if(!this.isModified('password'))
    {
        next();
    }
    this.password=await bcrypt.hash(this.password,10);
})


//JWT Token

userSchema.methods.getJWTToken=function()
{ 
    return jwt.sign({id:this.id},'jducbubdscbdcbdbccbdc',{
        expiresIn:'5d',
    });
}

//Compare password
userSchema.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}


//Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function ()
{
    //Generating Token

    const resetToken = crypto.randomBytes( 20 ).toString( 'hex' );

    //Hashing And Add to UserSchema
    this.resetPasswordToken = crypto
        .createHash( 'sha256' )
        .update( resetToken )
        .digest( 'hex' );
    
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    return resetToken;
}

module.exports = mongoose.model( 'User', userSchema );
