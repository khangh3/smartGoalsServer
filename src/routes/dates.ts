import express from "express";
import db from "../db/conn.js";

const goals = express.Router();

goals.get("/", async (req, res) => {
  const collection = db.collection("date");
  const cursor = collection.find();
  const dates = {
    Dates: await cursor.toArray(),
  };
  res.json(dates);
});

export default goals;
