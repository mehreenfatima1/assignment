const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({ extended: true })) 

app.get('/login', function(req, res) {
  
    res.render('pages/index')
            })

app.post('/login', function(req, res) {

    const { username, password } = req.body

    if(username === 'mehreen' && password === 'password') {
        res.render('pages/about', { user: username, password: password })
    } else {
        res.render('pages/index', {  error: 'Invalid username or password' })
    }
})

app.listen(port)