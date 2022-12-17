import express from "express";
const app = express();
import cors from "cors";
import morgan from "morgan";

const PORT = 8000;

//middleware
app.use(express.json()); /// converting json to object type
app.use(cors()); // allows cross origin access from diffrent server frontend app
app.use(morgan("dev")); // log all the server requests

// request handler

//db connection
import { connectDB } from "./src/config/dbConfig.js";
connectDB();

// router
import router from "./src/routers/UserRouter.js";

app.use("/users", router);

app.use("/", (req, res) => {
  res.json({
    message: "Server response",
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Your server is running at http://localhost:${PORT}`);
});
