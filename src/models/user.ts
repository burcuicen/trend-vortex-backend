import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  recentSearches: string[];
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  recentSearches: { type: [String], required: false },
});

const UserModel = mongoose.model<User>("User", UserSchema);

export default UserModel;

