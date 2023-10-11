// Import necessary modules and set up Express app
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import { dbconnect } from "./config/Database.js";
import { router } from "./router/Router.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.json());
app.use("/v1/fine_tuning/jobs", router);

app.get("/", (req, res) => {
  res.send("Server is running");
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  await dbconnect();
  console.log(`The server has started on port ${PORT}`);
});
