import express from "express"
import {createview,create,edit,display,update,del,dele,createbook,displaybooks,createdbook,deleBook,delBook,updateBook,editBook}from "../controller/controller.js"
const router=express.Router()

router.get('/home',createview)
router.post('/home',create)
router.get('/display',display)
router.get('/edit/:id',edit)
router.post('/edit/:id',update)
router.get('/delete/:id',del)
router.post('/delete/:id',dele)
router.get('/bookinput',createbook)
router.post('/bookinput',createdbook)
router.get('/displaybooks',displaybooks)
router.get('/editbook/:id',editBook)
router.post('/editbook/:id',updateBook)
router.get('/deletebook/:id',delBook)
router.post('/deletebook/:id',deleBook)

export {router}