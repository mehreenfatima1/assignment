import express from "express"
import{adduser,submituser,displayuser,updateUser,deleteUser,edituser} from "../controller/controller.js"
const router=express.Router()

router.get('/add-user',adduser)
router.post('/add-user',submituser)
router.get('/display-user',displayuser)
router.get('/update/:id',edituser)
router.post('/update/:id',updateUser)
router.post('/delete/:id',deleteUser)
export{router}
