const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config();

const connectionString = process.env.ATLAS_URI;

const startServer = async () => {
  const app = express();
  app.use(cors());

  let db;
  const client = new MongoClient(connectionString);
  try {
    conn = await client.connect();
  } catch (e) {
    console.error(e);
  }
  db = conn.db("cyf-fullstack-product");

  app.use(bodyParser.json());

  app.post("/pro", (req, res) => {
    res.send();
  });
  app.get("/pro", async (req, res) => {
    const collection = await db.collection("cyf-fullstack-product");
    const products = await collection.find({}).toArray();

    console.log(products);

    res.json(products);
  });
  app.listen(3001);
};

startServer();