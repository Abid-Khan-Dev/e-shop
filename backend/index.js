import express from 'express'
import env from 'dotenv';
import dbConnect from './config/db.js';
import cors from 'cors'


// configurations...
const app = express();
app.use(express.json());
env.config();

dbConnect()

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}))











const port = process.env.PORT;
app.listen(port, () => {
    try {
        console.log("backend is running on", port)
    }
    catch (error) {
        console.log(error.message)
    }
})