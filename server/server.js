import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import mongoose from "mongoose";


const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);

mongoose.connect(process.env.ATLAS_URI)
    .then((db) => {console.log("Connected to MongoDB")})
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });

// start the Express server
app.listen(5050, () => {
    console.log(`Server listening on Port 5050...`);
});