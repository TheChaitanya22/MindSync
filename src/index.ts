import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { UserModel } from "./db";
import 'dotenv/config'

const app = express();

app.post("/api/v1/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    UserModel.create({
        username: username,
        password: password
    })

})

app.post("/api/v1/signin", (req, res) => {
    
})

app.post("/api/v1/content", (req, res) => {
    
})

app.get("/api/v1/content", (req, res) => {
    
})

app.delete("/api/v1/content", (req, res) => {
    
})

app.post("/api/v1/brain/share", (req, res) => {
    
})

app.get("/api/v1/brain/:shareLink", (req, res) => {

})

async function main(){
    await mongoose.connect(process.env.MONGO_URL as string);
    app.listen(3000);
}

main();