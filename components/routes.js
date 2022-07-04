// 95VM606vpAmlCfwR
// 95VM606vpAmlCfwR
const express = require("express");
const router = express.Router();
const Book = require('./SchemaModel');

router.post("/",async (req,resp,next)=>{
    const { name , author , description , price , available,image} = req.body;
    let book;
    book = new Book({
        name,
        author,
        description,
        price,
        available,
        image
    });
     await book.save();

     if(!book){
       return resp.send(404).json({message:"error"});
     }
     return resp.status(200).json({book})
});

router.get("/",async(req,resp,next)=>{
    let books;
    books = await Book.find();
    if(!books){
        return resp.send(404).json({message:"error"});
      }
      return resp.status(200).json({books})
})
router.get("/:id",async(req,resp,next)=>{
    const id = req.params.id;
    let book;
    book = await Book.findById(id);
    if(!book){
        return resp.send(404).json({message:"error"});
      }
      return resp.status(200).json({book})
});

router.put("/:id",async(req,resp,next)=>{
    const id = req.params.id;
    const {name,author,description,price,available,image} = req.body;
    let book = await Book.findByIdAndUpdate(id,{
        name,
        author,
        description,
        price,
        available,
        image
    }); await book.save();
    if(!book){
        return resp.send(404).json({message:"error"});
      }
      return resp.status(200).json({book})
});

router.delete("/:id",async(req,resp,next)=>{
    const id = req.params.id;
    let book = await Book.findByIdAndRemove(id);
    if(!book){
        return resp.send(404).json({message:"error"});
      }
      return resp.status(200).json({book})
});

module.exports = router;