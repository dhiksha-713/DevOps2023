require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
// const User = require("./models/User");
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');


connectDB();



app.use(express.json());
app.use(cors());

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
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);

// app.post('/signup',(req,res) =>{
//     UserCollection.create(req.body)
//     .then(user => res.json(user))
//     .catch(error => res.json(error))
// })

app.use("/api/products", productRoutes);

//listen to port variable
const PORT = process.env.PORT || 5000;//this or 5000/8080
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));