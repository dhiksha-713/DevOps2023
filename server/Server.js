require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
connectDB();
// const User = require("./models/User");
const userRoutes = require('./routes/userRoutes');
const productRoutes = require("./routes/productRoutes");

const cors = require("cors");
const cookiParser = require("cookie-parser")

// const authRoutes = require('./routes/authRoutes');






app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(userRoutes);
app.get("/",(req,res)=>{
    res.status(201).json("Server created")
})

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// })

// const User = new mongoose.model("User", userSchema)

//routes routes

// app.post("/signup",


// }) 
//routes
// app.use(userRoutes);
// app.use("/api/auth",authRoutes);

// app.post('/signup',(req,res) =>{
//     UserCollection.create(req.body)
//     .then(user => res.json(user))
//     .catch(error => res.json(error))
// })

// app.use("/api/products", productRoutes);

//listen to port variable
const PORT = process.env.PORT || 5000;//this or 5000/8080
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));