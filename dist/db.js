"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentModel = exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const userSchema = new mongoose_2.Schema({
    username: { type: String, unique: true },
    password: String
});
const contentTypes = ['image', 'video', 'article', 'audio'];
const contentSchema = new mongoose_2.Schema({
    link: { type: String, unique: true },
    type: { type: String, enum: contentTypes, required: true },
    title: { type: String, required: true },
    tags: [{ type: mongoose_1.default.Types.ObjectId, ref: 'Tag' }],
    userId: { type: mongoose_1.default.Types.ObjectId, ref: 'User', required: true },
});
exports.UserModel = mongoose_1.default.model("User", userSchema);
exports.ContentModel = mongoose_1.default.model("Content", contentSchema);
