const express = require('express');
const bodyParser = require('body-parser');
const bootstrap = require('./infraestructure/config/bootstrap');

//Routes
const prefix = '/api/v1';
const strawHat = require('./presentation/routes/StrawHatRoutes');

const app = express();

//Boby parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, responseType');  
    next();
});

app.use((req, res, next) => {
    req.app.servicelocator = require('./infraestructure/config/service_locator');
    next();
});
app.use(prefix, strawHat);

const PORT = process.env.PORT || 3000;

const start = async () => {
    await bootstrap.init();
    app.listen(PORT, () => console.log('Server running on port', PORT));
}

start();

