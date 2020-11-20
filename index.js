import express from "express";
import routes from "./src/routes/crmRoutes";

const app = express();
const PORT = 8081;

routes(app);

app.get("/", (req, res) => {
  res.send(`hi on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
