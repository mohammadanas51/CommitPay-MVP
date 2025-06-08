import mongoose from "mongoose";
import express from 'express' ;
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth";
import issueRoutes from "./routes/issues";


dotenv.config();

const app = express();

const allowedOrigins = [
  'http://localhost:5173', // for local frontend dev
  'https://commitpay-mvp.web.app' // for deployed Firebase frontend
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    credentials: true, // 🔥 important for OAuth flows
  })
);


app.use(express.json());

app.use("/auth", authRoutes);

app.use("/issues", issueRoutes);


app.get("/", (_req, res) => {
    res.send("Maun backend is live");
});

const PORT = process.env.PORT || 5000 ;

mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection failed", err));

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});