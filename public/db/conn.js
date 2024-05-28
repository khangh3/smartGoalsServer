import { MongoClient } from "mongodb";
const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);
const conn = await client.connect();
const db = conn.db("smartGOALS");
export default db;
