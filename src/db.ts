import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

const contentTypes = ['image', 'video', 'article', 'audio'];

const contentSchema = new Schema({
    link: {type: String, unique: true},
    type: {type: String, enum: contentTypes, required: true},
    title: { type: String, required: true },
    tags: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },    
})

export const UserModel = mongoose.model("User", userSchema);
export const ContentModel = mongoose.model("Content", contentSchema);