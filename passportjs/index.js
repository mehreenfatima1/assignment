
import express from 'express';
import bcrypt from 'bcrypt';
import passport from 'passport';
import flash from 'express-flash';
import session from 'express-session';

const app = express();
const port = 8000

import initializePassport from './passport-config.js';

initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/', checkAuthenticated, function (req, res) {

    console.log(req.user.name)
    res.render('index', { name: req.user.name });

});

app.get('/user-downloads', checkAuthenticated, function (req, res) {

    res.render('download', { data: 'book1',name:req.user.name });

});
const users = [];
app.get('/login', checkNotAuthenticated, function (req, res) {

    res.render('login');

});

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

app.get('/register', checkNotAuthenticated, function (req, res) {

    res.render('register.ejs');

});

app.post('/register', checkNotAuthenticated, async (req, res) => {


    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        res.redirect('/login');
    } catch {
        res.redirect('/register');
    }

});


function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }

    res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}

app.listen(port, function () {
    console.log(`${port} -> This port has been start`);
});