const mongoose=require('mongoose');

const movieSchema=new mongoose.Schema({
    backgroundImg:{
        type:String,
    },
    cardImg:{
        type:String
    },
    description:{
        type:String
    },
    subTitle:{
        type:String
    },
    title:{
        type:String
    },
    titleImg:{
        type:String
    },
    type:{
        type:String
    }
})

const Movie=mongoose.model('Movie',movieSchema);
module.exports=Movie;