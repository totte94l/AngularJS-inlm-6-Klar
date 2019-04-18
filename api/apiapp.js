const express = require('express');
const app = express();
const bodyParser = require('body-parser');
    
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
        
        if(req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        }
        next();
    });

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    
    const productRoutes = require("./routes/products");
    app.use("/api/products", productRoutes);

    const usersRoutes = require("./routes/users");
    app.use("/api/users", usersRoutes);
    
    module.exports = app;


