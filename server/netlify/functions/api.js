const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(cors());

dotenv.config();

const connectionString = process.env.ATLAS_URI;

async function connectToDb() {
  const client = new MongoClient(connectionString);
  try {
    conn = await client.connect();
  } catch (e) {
    console.error(e);
  }
  return conn.db("cyf-fullstack-product");
}

router.get("/pro", async (req, res) => {
  connectToDb()
    .then((db) => db.collection("cyf-fullstack-product"))
    .then(async (collection) => {
      const products = await collection.find({}).toArray();
      console.log(products);

      res.json(products);
    });
  // .catch((err) => {
  //   console.error(err);
  // });
});

app.use("/", router);

module.exports.handler = serverless(app);
