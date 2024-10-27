import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import mailRouter from "../src/routes/mailRouters.js";

dotenv.config();
export const app = express();
export const PORT = process.env.PORT || 3000;
export const pass = process.env.PASS;
export const user = process.env.USER;

app.use(express.json());
app.use(cors());

app.use("/", mailRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

start();
