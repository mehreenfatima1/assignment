import mongoose from "mongoose"

const Schema=mongoose.Schema

const BookSchema=new mongoose.Schema({
    name:{type:String,required:true},
    author:{type:String,required:true},
    genre:{type:String,required:true}
   })
   const Book=mongoose.model("Book",BookSchema)
const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    number:{type:Number,required:true},
    book:[{
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: true
      }]
   })
   const User=mongoose.model("user",UserSchema)
   export {User,Book}