const express = require('express');
const server = express();
const router = express.Router();
const bodyParser = require('body-parser');

server.set('view engine', 'pug');
server.set('views', 'views');

server.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res, next) => {
    res.status(200).render('register');
})

router.post('/', (req, res, next) => {
    var firstName = req.body.firstName.trim();
    var lastName = req.body.lastName.trim();
    var username = req.body.username.trim();
    var email = req.body.email.trim();
    var password = req.body.password;
    if (firstName && lastName && username && email && password){
        
    }
    res.status(200).render('register');
})

module.exports = router;