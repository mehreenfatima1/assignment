import mongoose from "mongoose"
const Schema=mongoose.Schema

const BookSchema=new mongoose.Schema({
    name:String,
    author:String,
    genre:String,
    user:[{
        type:Schema.ObjectId,
        ref:'User'
    }]
   })
   const Book=mongoose.model("Book",BookSchema)
const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    number:Number,
    book:[{ 
        type: Schema.ObjectId,
         ref: 'Book' }]
   })
   const User=mongoose.model("user",UserSchema)

   export {User,Book}