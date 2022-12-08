const mongoose = require('mongoose');


let Schema = new    mongoose.Schema({
    "symbol" :{
         type :String ,
         Unique : true
    },
    
    "name": {type : String,
        Unique : true
    },
    "marketCapUsd":  String  ,
    "priceUsd":   String
   })

module.exports=mongoose.model("createCripto",Schema)