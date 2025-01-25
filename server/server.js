import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import mongoose from "mongoose";


const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);

mongoose.connect(process.env.ATLAS_URI)
    .then((db) => {console.log("Connected to MongoDB")})
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });

// Middleware
app.use(express.json());

// API-Routen
app.use("/api", (req, res) => {
    res.json({ message: "API funktioniert!" });
});

// Statische Dateien aus dem React-Build-Ordner ausliefern
app.use(express.static(path.join(__dirname, "../client/dist")));

// Alle anderen Routen an die React-App weiterleiten
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

// start the Express server
app.listen(port, () => {
    console.log(`Server listening on Port ` + port + "...");
});