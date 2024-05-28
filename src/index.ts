import express from "express";
import cors from "cors";
import "./loadenvironment.js";
import goals from "./routes/goals.js";

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

app.use("/goals", goals);

app.listen(process.env.PORT, () =>
  console.log(`Listening at PORT: ${process.env.PORT}`),
);
