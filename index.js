import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });

// Schema import
import userCollection from "./Models/User.js";

// routes imports
import userRoutes from "./routes/userRoutes.js";

import express from "express";
const PORT = 3000;
const app = express();

app.use(express.json());

// rest api routes
app.use("/api/v1", userRoutes);

// function to connect to database
async function connectToDataBase() {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    console.log("Server listening");
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
  }
}

app.listen(PORT, () => connectToDataBase());
