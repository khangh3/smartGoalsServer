import express from "express";
import db from "../db/conn.js";
const goals = express.Router();
goals.get("/", async (req, res) => {
    const collection = db.collection("goals");
    const cursor = collection.find();
    const dates = {
        Goals: await cursor.toArray(),
    };
    res.json(dates);
});
goals.get("/:day", async (req, res) => {
    const collection = db.collection("goals");
    const day = parseInt(req.params.day);
    const cursor = collection.find({
        $and: [{ startDate: { $lte: day } }, { endDate: { $gte: day } }],
    });
    const arr = await cursor.toArray();
    res.json({ goals: arr });
});
goals.post("/", async (req, res) => {
    const collection = db.collection("goals");
    const result = await collection.insertOne(req.body);
    res.json(result);
});
export default goals;
