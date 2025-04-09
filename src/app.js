import express from 'express';
import cookieParser from 'cookie-parser';  
import cors from 'cors';

const app= express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));
app.use(express.json()); // for parsing application/json
app.use(cookieParser());     // for parsing cookies 
app.use(express.urlencoded({extended:true})); // for parsing application/x-www-form-urlencoded
app.use(express.static('public')); // for serving static files

export default app;