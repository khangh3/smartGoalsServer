import express from "express";
import cors from "cors";
import "./loadenvironment";
import { env } from "process";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json("hello");
});

app.listen(process.env.PORT, () =>
  console.log(`Listening at PORT: https://localhost:${process.env.PORT}`),
);
