const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sandershi:Ss214350894@cluster0.sr3lhpi.mongodb.net/?retryWrites=true&w=majority")
app.listen(3001,function(){
    console.log("3001")
})