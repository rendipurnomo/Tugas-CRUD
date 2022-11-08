import express from "express";
import db from "./config/Database.js";
import dotenv from "dotenv";
import cors from "cors";
import UserRoute from "./Route/UserRoute.js";
dotenv.config();

const app = express();

// (async()=>{
//     await db.sync();
// })();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(express.static("public"));
app.use(UserRoute);


app.listen(process.env.APP_PORT, ()=>{
    console.log('Server up and running...');
});