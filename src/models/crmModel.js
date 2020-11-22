import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

ContactSchema.set("timestamps", true);
