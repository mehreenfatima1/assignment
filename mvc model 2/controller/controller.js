import { json } from "express"
import { User,Book } from "../model/users.js"
import mongoose from "mongoose"
const adduser=(req,res)=>{
    res.render('pages/user')
}
const addeduser=(req,res)=>{
    const user=new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        number: req.body.number,
       })
       user.save(user)
       .then(data =>{
        console.log(data)}
        )
        res.redirect("/displayuser")
   }

const displayuser=(req,res)=>{
    User.find().
    then(user=>{
        res.render("pages/displayuser",{user})
    })
   }
const addbook=(req,res)=>{
    res.render('pages/book')
}
const addedbook=(req,res)=>{
    const book=new Book({
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre
       })
       book.save()
       .then(data =>{
        console.log(data)}
        )
        res.redirect("/displaybooknuser")
  
}
const displaybooknuser=(req,res)=>{
    User.find()
    .then(userArray => {
        Book.find()
        .then(bookArray => {
            res.render("pages/displaybooknuser", {user: userArray, book: bookArray})
        })
    })
}
const addbookwithuser = async (req, res) => {
    try {
        const bookId = new mongoose.Types.ObjectId(req.body.book)
        const userId = new mongoose.Types.ObjectId(req.body.user)
        await User.updateMany(
            { _id: userId },
            { $push: { book: bookId } }
        )
        const users = await User.find().populate("book");
        res.render("pages/addbookwithuser", { users });
        
        users.forEach(user => {
                        console.log(`User name is ${user.name}`);
            user.book.forEach(book => {
                console.log(`book name is  - ${book.name}`);
    
            });
        });
    } catch (err) {
        console.log(err);
    }
};
const edituser=async (req, res) => {
    try {
      const userData = await User.findOne({
        _id:new mongoose.Types.ObjectId(req.params.id),
      })
  
      console.log("User data fetched:", userData);
      res.render("pages/edituser", { userData });
    } catch (error) {
      console.error("Error:", error);
      console.error("Error message:", error.message)
}}

const updateuser=(req,res)=>{
    const id=req.params.id
    User.findByIdAndUpdate(id,req.body)
    .then(userData => {
        console.log(userData)}
    )
    res.redirect('/displayuser')
        }
const deleteuser=async (req, res) => {
    try {
      const userData = await User.findOne({
        _id:new mongoose.Types.ObjectId(req.params.id),
      })
      console.log("User data fetched:", userData);
      res.render("pages/deleteuser", { userData });
    } catch (error) {
      console.error("Error:", error);
      console.error("Error message:", error.message);
      res.send("Error occurred while fetching data.");
}}
const deluser=(req,res)=>{
    let id=req.params.id
     User.findByIdAndDelete(id)
     .then(console.log(`User with id ${id} Deleted`))    
    
    res.redirect('/displayuser')
}
const editbook=async (req, res) => {
    try {
      const bookData = await Book.findOne({
        _id:new mongoose.Types.ObjectId(req.params.id),
      })
  
      console.log("Book data fetched:", bookData);
      res.render("pages/editbook", { bookData });
    } catch (error) {
      console.error("Error:", error);
      console.error("Error message:", error.message)
}}
const updatebook=(req,res)=>{
    const id=req.params.id
    Book.findByIdAndUpdate(id,req.body)
    .then(bookData => {
        console.log(bookData)}
    )
    res.redirect('/displaybooknuser')
        }
const deletebook=async (req, res) => {
    try {
      const bookData = await Book.findOne({
        _id:new mongoose.Types.ObjectId(req.params.id),
      })
      console.log("Book data fetched:", bookData);
      res.render("pages/deletebook", { bookData });
    } catch (error) {
      console.error("Error:", error);
      console.error("Error message:", error.message)
}}
const delbook=(req,res)=>{
    let id=req.params.id
     Book.findByIdAndDelete(id)
     .then(console.log(`Book with id ${id} Deleted`))    
    
    res.redirect('/displaybooknuser')
}
export{adduser,addeduser,displayuser,addbook,addedbook,displaybooknuser,addbookwithuser,edituser,updateuser,deleteuser,deluser,editbook,updatebook,deletebook,delbook}