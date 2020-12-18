import {
  login,
  register,
  loginRequired,
  getUserWithID,
  updateUserWithID,
} from "../controllers/userController";

import {
  addNewBudget,
  getBudgets,
  getBudgetWithID,
} from "../controllers/budgetController";

const routes = (app) => {
  app
    .route("/budget")
    // get all budgets
    .get((req, res, next) => {
      // middleware
      next();
    }, getBudgets)

    // get all budgets
    .get((req, res, next) => {
      // middleware
      next();
    }, getBudgets)

    // add a new budget
    .post(addNewBudget);

  app.route("/budget/:user_id").get(getBudgetWithID);
};

export default routes;
