const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        require:true,
    },
    category:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
},{timestamp:true});

const Book = mongoose.model('book',bookSchema);

module.exports = Book;