var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
  
})
router.post('/', function(req, res,next) {

  const { username, password } = req.body

  if(username === 'mehreen' && password === 'password') {
      res.render('about', { user: username, password: password })
      console.log("user:"+ [username , password])
  } else {
      res.render('index', {  error: 'Invalid username or password' })
  }
})

module.exports = router;
