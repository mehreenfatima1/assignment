import {json} from "express"
import Users from '../model/users.js'


const adduser=async(req,res)=>{
    res.render('pages/adduser')
}
const submituser=async(req,res)=>{
    const user=await Users.create({
        firstName:req.body.firstname,
        lastName:req.body.lastname,
        email:req.body.email
    })
    console.log(`new user created: ${user}`)
    res.redirect('/display')      
}
const displayuser=async(req,res)=>{
    const displayuser=await Users.findAll()
    res.render('pages/display-user',{displayuser}) 
}
const edituser=async(req,res)=>{
    const edituser=await Users.findOne({where:{id:req.params.id}})
    res.render('pages/edit-user',{edituser})
} 
const updateUser=async(req,res)=>{
    try{
        const updateuser=await Users.findOne({
            where:{id:req.params.id}
        })
        
    
updateuser.firstName=req.body.firstname
updateuser.lastName=req.body.lastname
updateuser.email=req.body.email
await updateuser.save();

        console.log(`User with ID ${req.params.id} updated successfully`);
}catch (error) {
    console.error("Error updating user:", error)
}}

const deleteUser=async(req,res)=>{
    try{
        const deluser=await Users.findOne({
            where:{id:req.params.id}
        })
        
await deluser.destroy();

console.log(`User with ID ${req.params.id} deleted successfully`);
}catch (error) {
    console.error("Error deleting user:", error)
}}




export {adduser,submituser,displayuser,updateUser,deleteUser,edituser}