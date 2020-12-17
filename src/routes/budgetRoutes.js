import {
  login,
  register,
  loginRequired,
  getUserWithID,
  updateUserWithID,
} from "../controllers/userController";

import { addNewBudget, getBudgets } from "../controllers/budgetController";

const routes = (app) => {
  app
    .route("/budget")
    // get all budgets
    .get((req, res, next) => {
      // middleware
      next();
    }, getBudgets)

    // add a new budget
    .post(addNewBudget);
};

export default routes;
