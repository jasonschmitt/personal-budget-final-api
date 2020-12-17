import mongoose from "mongoose";
import { BudgetSchema } from "../models/budgetModel";

const Budget = mongoose.model("Budget", BudgetSchema);

export const addNewBudget = (req, res) => {
  let newBudget = new Budget(req.body);

  console.log(req.body);

  newBudget.save((err, budget) => {
    if (err) {
      res.send(err);
    }
    res.json(budget);
  });
};
