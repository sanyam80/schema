const express = require("express");
const mongoose = require("mongoose");
const { stringify } = require("querystring");
const app = express();

app.get("/users",(req,res)=>{
    return res.send("/users")
});
const connect = ()=>{
    mongoose.connect("mongodb://localhost:27017/users");
}
const userSchema = mongoose.Schema[{
    id :Number,
    first_name:String,
    last_name:String,
    email:String,
    gender:String,
    ip_address:String
}]
const user = mongoose.model("students", userSchema)

app.get("/users", async(req,res) =>{
    
    const User = await user.find().lean().exec()
    return res.send(User)

})







app.listen(5000,async()=>{
    try{
        await connectDB();
    }
    catch{
        console.log("something went wrong")
    }
    console.log("Listening on port 5000")
})