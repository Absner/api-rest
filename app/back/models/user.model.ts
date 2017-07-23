import { mongoose } from '../config/mongoose.config';
import { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
    firts_name  :   string,
    last_name   :   string,
}

const schema    =   new Schema({
    firts_name  :   String,
    last_name   :   String,
})

schema.index({"firts_name"   :   "text"});

export interface IUserModel {
}
export type UserModel = Model<IUser> & IUserModel;

export const User: UserModel = <UserModel>mongoose.model<IUser>("User", schema);