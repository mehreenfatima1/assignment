import { User,Book } from "../model/users.js"
import mongoose from "mongoose"
const createview=(req,res)=>{
    res.render("pages/user")
}
const create=(req,res)=>{
    const user=new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        number: req.body.number
       })
       user.save(user)
       .then(data =>{
        console.log(data)}
        )
        res.redirect("/display")
   }
   const display=(req,res)=>{
    User.find().
    then(user=>{
        res.render("pages/display",{user})
    })
   }
   const edit = async (req, res) => {
    try {
      const userData = await User.findOne({
        _id:new mongoose.Types.ObjectId(req.params.id),
      })
  
      console.log("User data fetched:", userData);
      res.render("pages/edit", { userData });
    } catch (error) {
      console.error("Error:", error);
      console.error("Error message:", error.message);
      res.send("Error occurred while fetching data.");
}}
const update=(req,res)=>{
    const id=req.params.id
    User.findByIdAndUpdate(id,req.body)
    .then(userData => {
        console.log(userData)}
    )
    res.redirect('/display')
        }
const del =async (req, res) => {
        try {
          const userData = await User.findOne({
            _id:new mongoose.Types.ObjectId(req.params.id),
          })
      
          console.log("User data fetched:", userData);
          res.render("pages/delete", { userData });
        } catch (error) {
          console.error("Error:", error);
          console.error("Error message:", error.message);
          res.send("Error occurred while fetching data.");
    }}
const dele=(req,res)=>{
    let id=req.params.id
     User.findByIdAndDelete(id)
     .then(console.log(`User with id ${id} Deleted`))    
    
    res.redirect('/display')
}

const createbook=(req,res)=>{
    res.render("pages/bookinput")
}
const createdbook=(req,res)=>{
    const book=new Book({
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre
       })
       book.save(book)
       .then(data =>{
        console.log(data)}
        )
        res.redirect("/displaybooks")
   }
   const displaybooks=(req,res)=>{
    Book.find().
    then(book=>{
        res.render("pages/displaybooks",{book})
    })
   }
   const editBook = async (req, res) => {
    try {
      const bookData = await Book.findOne({
        _id:new mongoose.Types.ObjectId(req.params.id),
      })
  
      console.log("Book data fetched:", bookData);
      res.render("pages/bookupdate", { bookData });
    } catch (error) {
      console.error("Error:", error);
      console.error("Error message:", error.message);
      res.send("Error occurred while fetching data.");
}}
const updateBook=(req,res)=>{
    const id=req.params.id
    Book.findByIdAndUpdate(id,req.body)
    .then(bookData => {
        console.log(bookData)}
    )
    res.redirect('/displaybooks')
        }
const delBook =async (req, res) => {
        try {
          const bookData = await Book.findOne({
            _id:new mongoose.Types.ObjectId(req.params.id),
          })
      
          console.log("Book data fetched:", bookData);
          res.render("pages/deletebook", { bookData });
        } catch (error) {
          console.error("Error:", error);
          console.error("Error message:", error.message);
          res.send("Error occurred while fetching data.");
    }}
const deleBook=(req,res)=>{
    let id=req.params.id
     Book.findByIdAndDelete(id)
     .then(console.log(`Book with id ${id} Deleted`))    
    
    res.redirect('/displaybooks')
}



export {create,createview,edit,display,update,del,dele,createdbook,createbook,displaybooks,deleBook,delBook,updateBook,editBook}