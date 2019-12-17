const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyPrser = require('body-parser');
const passport = require('passport');
const url = require('./config/keys').mongoURI;
const users = require('./routers/api/users');


app.use(bodyPrser.json())
app.use(bodyPrser.urlencoded({ extended:true }));
app.use('/api/users',users);
// app.use('/api/profiles',profile);
app.use(passport.initialize());

mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology: true}, (err,db) => {
    if(err) throw err;
    console.log("Database connected...")
})
.catch(err => console.log("Error with connection"));
const port = process.env.PORT || 8000; 
app.listen(port, ()=> {
    console.log(`server is running on ${port}`);
});