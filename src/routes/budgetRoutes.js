import {
  login,
  register,
  loginRequired,
  getUserWithID,
  updateUserWithID,
} from "../controllers/userController";

import { addNewBudget } from "../controllers/budgetController";

const routes = (app) => {
  app
    .route("/budget")
    // get all budgets
    // .get(
    //   (req, res, next) => {
    //     // middleware
    //     console.log(`Request from: ${req.originalUrl}`);
    //     console.log(`Request type: ${req.method}`);
    //     next();
    //   },
    //   loginRequired,
    //   getContacts
    // )

    // add a new budget
    .post(addNewBudget);
};

export default routes;
