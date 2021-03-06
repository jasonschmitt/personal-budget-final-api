import express from "express";
import routes from "./src/routes/crmRoutes";
import testRoutes from "./src/routes/testRoutes";
import budgetRoutes from "./src/routes/budgetRoutes";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import jsonwebtoken from "jsonwebtoken";

const app = express();

const PORT = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8081;

// enable cors
app.use(cors());

// mongoose connection
mongoose.Promise = global.Promise;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/personalBudgetFINALdb";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// body parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// JWT setup
app.use((req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jsonwebtoken.verify(
      req.headers.authorization.split(" ")[1],
      "RESTFULAPIs",
      (err, decode) => {
        if (err) {
          req.user = undefined;
        }
        req.user = decode;
        next();
      }
    );
  } else {
    req.user = undefined;
    next();
  }
});

routes(app);
budgetRoutes(app);
testRoutes(app);

// serving static files
app.use(express.static("public"));

app.get("/test", (req, res) => {
  res.send("test route!");
});

app.get("/", (req, res) => {
  console.log(`hi on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
