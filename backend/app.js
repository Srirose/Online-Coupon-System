import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import couponRoutes from "./routes/couponRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/couponDB")
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));


app.use(cors());
app.use(express.json());

app.use("/api", couponRoutes);

export default app;