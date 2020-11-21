const routes = (app) => {
  app.route("/test").get(
    (req, res, next) => {
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    },
    (req, res, next) => {
      res.send("WE Connected!");
    }
  );
};

export default routes;
