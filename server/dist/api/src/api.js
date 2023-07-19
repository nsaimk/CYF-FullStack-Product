const express = require("express");

const serverless = require("serverless-http");

const app = express();

const router = express.Router();

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
