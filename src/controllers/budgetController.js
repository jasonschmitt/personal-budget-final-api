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

export const getBudgets = (req, res) => {
  Budget.find({}, (err, budget) => {
    if (err) {
      res.send(err);
    }
    res.json(budget);
  });
};

export const getBudgetWithID = (req, res) => {
  console.log("getBudgetWithID we made it");
  console.log(req.params.user_id);
  Budget.find({ user_id: req.params.user_id }, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};
