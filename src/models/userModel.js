import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  firstName: {
    type: String,
  },
  hashPassword: {
    type: String,
  },
});

UserSchema.set("timestamps", true);
