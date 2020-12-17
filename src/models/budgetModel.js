import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const BudgetSchema = new Schema({
  user_id: {
    type: String,
  },
  labels: {
    type: [String],
    default: [],
  },
  values: {
    type: [Number],
    default: [],
  },
  backgroundColor: {
    type: [String],
    default: [],
  },
});

BudgetSchema.set("timestamps", true);
