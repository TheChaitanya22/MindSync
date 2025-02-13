import { Model, Schema } from "mongoose";

const UserModel = new Schema({
    username: {type: String, unique: true},
    password: String
})

const UserSchema = new Schema