// chatgpt
// import dotenv from "dotenv"
// dotenv.config()


import dotenv from "dotenv";
import path from "path";

// force exact path to .env
dotenv.config({
  path: path.join(process.cwd(), ".env"),
});

import express from "express";
import cors from "cors";
// import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

// chatgpt
console.log("ENV CHECK:", process.env.PORT);
console.log("MONGO:", process.env.MONGODB_URI);
// chatgpt

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
// chatgpt
app.use(express.urlencoded({ extended: true }));
// chatgpt
app.use(cors());

// api endpoint
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)
app.use("/api/user", userRouter)

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => console.log("Server Started", port));
