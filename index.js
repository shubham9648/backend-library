const express = require('express');
const mongoose = require('mongoose');
const router = require('./components/routes')

const app = express();

app.use(express.json())
app.use("/books",router)

mongoose.connect
("mongodb+srv://admin:95VM606vpAmlCfwR@cluster0.egmq0.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("connected");
})
app.listen(5000);