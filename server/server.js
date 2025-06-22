import express from 'express'
import "dotenv/config";
import cors from 'cors';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from './controllers/clerkWebhooks.js';


connectDB()
const app = express()
app.use(cors()) // enables cross origin resource sharing

// middleware
app.use(express.json())
app.use(clerkMiddleware())

// api for webhoook
app.use("/api/clerk" , clerkWebhooks)

app.get('/' , (req,res)=>
res.send("Api is working fine with nodemon"))


const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>
console.log("server running on port 3000")
);