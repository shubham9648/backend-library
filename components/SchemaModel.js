const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name:String,
    author:String,
    description:String,
    price:Number,
    available:Boolean,
    image: String
})

module.exports = mongoose.model("SchemaModel",bookSchema);