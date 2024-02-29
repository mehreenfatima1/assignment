import dotenv from 'dotenv'
import express from "express";
import { router } from "./router/routes.js"
import path from 'path'
import bodyParser from 'body-parser';
import {fileURLToPath} from 'url'
import {sequelize} from './database/connection.js'

dotenv.config()

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const port = process.env.PORT

app.use(bodyParser.urlencoded({extended:false}))
app.use(router)
app.set('view engine', 'ejs')





app.listen(port, function () {
  console.log(`Port is now running @ ${port}`)
})