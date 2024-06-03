// import express from "express";
// const app = express()


// app.get('/', (req, res) => {
//     res.send("Hello World")
// })


// app.listen(3000, () => {
//     console.log("Server is running on port 3000")
// })

import connectDB from "./config/db.js";
import app from "./app.js";

connectDB()
.then(() => {
    console.log("MongoDB Connected");
    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    })
    }).catch((error) => {
        console.log("MongoDB Connection Error",error);
})