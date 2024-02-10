import dotenv from 'dotenv'
import express from "express";
import { router } from "./router/router.js"
import path from 'path'
import bodyParser from 'body-parser';
import {fileURLToPath} from 'url'
import {dbData} from './database/connection.js'

dotenv.config()
const app = express();
const port = process.env.PORT
app.use(bodyParser.urlencoded({extended:false}))
app.use(router)
app.set('view engine', 'ejs')
dbData()



app.listen(port, function () {
  console.log(`Port is now running @ ${port}`)
});