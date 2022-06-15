const mongoose =require('mongoose');

const connectDB=()=>{

    mongoose.connect('mongodb://localhost:27017/minorDisney',{useNewUrlParser:true,useUnifiedTopology:true,})
    .then(()=>{
        console.log("DB Connected");
})
.catch((err)=>{
    console.log("OH NO ERROR !!");
    console.log(err);
})
}
module.exports=connectDB;