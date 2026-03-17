import mongoose, {Schema, Document} from "mongoose";

export interface Message extends Document {
    content: string;
    sender: string;
    receiver: string;
    createdAt: Date;
    updatedAt: Date;
}
const messageSchema: Schema<Message> =new Schema({
    content: {type: String, required: true},
    sender: {type: String, required: true},
    receiver: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
const userSchema: Schema<IUser> = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});