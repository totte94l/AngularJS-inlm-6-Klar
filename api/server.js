const http = require('http');
const app = require('./apiapp.js');
const port = process.env.SERVER_PORT || 5000;
const db = require("mongoose");



http.createServer(app).listen(port, () => console.log("WEBSERVER http://localhost:" + port));

// MONGO DB
db.connect(process.env.MONGODB, { useNewUrlParser: true })
.then(function() { console.log("MongoDB online on port 27017") })
.catch(function(err) { console.log(err) });

db.set("useCreateIndex", true);