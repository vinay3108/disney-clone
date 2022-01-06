const express=require('express');
const app=express();
const mongoose =require('mongoose');
const dotenv = require( 'dotenv' );
const cookieParser = require('cookie-parser');
const bodyParser = require( 'body-parser' );
mongoose.connect('mongodb://localhost:27017/minorDisney',{useNewUrlParser:true,useUnifiedTopology:true,})
.then(()=>{
    console.log("DB Connected");
})
.catch((err)=>{
    console.log("OH NO ERROR !!");
    console.log(err);
})
 
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use( cookieParser() );

app.use( bodyParser.urlencoded( { extended: true } ) );
dotenv.config({path:'backend/config/config.env'});

const user=require('./routes/userRoutes');

app.use( '/api/v1', user );

const port=5000;

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})