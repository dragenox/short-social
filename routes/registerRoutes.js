const express = require('express');
const server = express();
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../schemas/UserSchema');

server.set('view engine', 'pug');
server.set('views', 'views');

server.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res, next) => {
    res.status(200).render('register');
})

router.post('/', async (req, res, next) => {
    var firstName = req.body.firstName.trim();
    var lastName = req.body.lastName.trim();
    var username = req.body.username.trim();
    var email = req.body.email.trim();
    var password = req.body.password;
    var payload = req.body;
    if (firstName && lastName && username && email && password) {
        var user = await User.findOne({
            $or: [
                { username: username },
                { email: email }
            ]
        })
    }
    else {
        payload.errorMessage = 'Make sure each field has a valid value';
        res.status(200).render('register', payload);
    }
});

module.exports = router;