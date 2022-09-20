import express from "express";
import Routes from '../Routes/Route.js';
import 'dotenv/config';
import './db/conn.js';
import cors from 'cors';

const app=express();

app.use(cors());
app.use(express.json());

const PORT=process.env.PORT||5000;

app.use('/',Routes);

app.get('*',(req,res)=>{
    res.send("no such route exists!");
})

app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`);
})