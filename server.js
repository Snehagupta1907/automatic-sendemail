import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import route from "./routes/route.js"
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/",route);

const port=process.env.PORT || 4001

app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}`);
})