require("dotenv").config();
const express = require("express")
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

//listen to port variable
const PORT = process.env.PORT || 5000; //this or 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));