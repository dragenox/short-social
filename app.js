const express = require('express');
const app = express();
const config = require('./config');
const middleware = require('./middleware');
const port = config.port;
const path = require('path');
const bodyParser = require('body-parser');
const database = require('./database');

const server = app.listen(port, () => {
    console.log('Server listening on port ' + port);
})

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));

// Static Paths
// Bootstrap and JQuery
app.use('/bs_css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/bs_js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/jq_js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
// Custom Files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const loginRoute = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoutes');

app.use('/login', loginRoute);
app.use('/register', registerRoute);

app.get('/', middleware.requireLogin, (req, res, next) => {
    var payload = {
        pageTitle: 'Home'
    }
    res.status(200).render('home', payload);
});