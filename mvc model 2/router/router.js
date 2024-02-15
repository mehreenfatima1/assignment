import express from "express"
import {adduser,addeduser,displayuser,addbook,addedbook,displaybooknuser,addbookwithuser,edituser,updateuser,deleteuser,deluser,editbook,updatebook,deletebook,delbook}from "../controller/controller.js"
const router=express.Router()

router.get('/',adduser)
router.post('/',addeduser)
router.get('/displayuser',displayuser)
router.get('/addbook',addbook)
router.post('/addbook',addedbook)
router.get('/displaybooknuser',displaybooknuser)
router.post('/displaybooknuser',addbookwithuser)
router.get('/edituser/:id',edituser)
router.post('/edituser/:id',updateuser)
router.get('/deleteuser/:id',deleteuser)
router.post('/deleteuser/:id',deluser)
router.get('/editbook/:id',editbook)
router.post('/editbook/:id',updatebook)
router.get('/delbook/:id',deletebook)
router.post('/delbook/:id',delbook)








export{router}