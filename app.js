const express = require('express')
const mongoose = require('mongoose')

var Book = require("./schema")



const url = "mongodb+srv://kamil:pass@cluster0.05ygd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url).then(()=>{
    console.log("Connected to server")
})

const app = express()

app.post("/entry",(req,res)=>{
    var bookData = Book({
        title: "The Dying Light",
        issuer: "Jeeya",
        dueDate: new Date()
    })
    bookData.save()
})

app.listen(4000,()=>console.log(`Server running at Port 4000`))