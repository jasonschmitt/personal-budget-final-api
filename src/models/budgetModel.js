import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const BudgetSchema = new Schema({
  label: {
    type: String,
  },
  value: {
    type: Number,
  },
  color: {
    type: String,
  },
});

BudgetSchema.set("timestamps", true);
