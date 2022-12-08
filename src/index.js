const express = require('express');
const {default:mongoose}=require("mongoose")
const route=require("./route/route")
const app=express()
mongoose.set('strictQuery', false)
app.use(express.json())


mongoose.connect("mongodb+srv://123:1234@cluster0.pf4v08v.mongodb.net/BlockChain",{
    useNewUrlParser : true,
    })
.then(()=> console.log("mongoDb is connected"))
.catch((err) => console.log(err))

app.use("/",route)

app.listen(process.env.PORT || 3000,function(){
    console.log("port"+""+ (process.env.PORT || 3000))
})