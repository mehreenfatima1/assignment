import dotenv from 'dotenv'
import express from "express";
import { router } from "./router/router.js"
import path from 'path'
import bodyParser from 'body-parser';
import {fileURLToPath} from 'url'
import {dbData} from './Database/connection.js'

dotenv.config()
const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const port = process.env.PORT
app.use('/css',express.static(path.join(__dirname,'./node_modules/bootstrap/dist/css')))
app.use(bodyParser.urlencoded({extended:false}))
app.use(router)
app.set('view engine', 'ejs')



dbData()



app.listen(port, function () {
  console.log(`Port is now running @ ${port}`)
})