const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:2701/sayaEnterprises")
.then(()=>{
    console.log("mongoDb connected");
})
.catch(()=>{
    console.log("failed");
})

const loginSchema=new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const loginCollection = mongoose.model("collection",loginSchema)