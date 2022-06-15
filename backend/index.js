const express=require('express');
const app=express();
const dotenv = require( 'dotenv' );
const cookieParser = require('cookie-parser');
const connectDB=require('./db');
// const seedDB=require('./seedDB');
connectDB();
 
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use( cookieParser() );

dotenv.config({path:'backend/config/config.env'});

const user=require('./routes/userRoutes');

app.use( '/api/v1', user );
// seedDB();

const port=5000;

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})