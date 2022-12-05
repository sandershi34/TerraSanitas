const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan")
const path = require("path")

const app = express();
const PORT = process.env.PORT || 8080;
const routes = require('./routes/api')

mongoose.connect("mongodb+srv://sandershi:Ss214350894@cluster0.sr3lhpi.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true
});

mongoose.connection.on('connected', ()=>{
    console.log("mongoose is connected")
})

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(morgan('tiny'));
app.use('/api',routes);


app.listen(PORT,function(){
    console.log(`server runs on ${PORT}`);
})