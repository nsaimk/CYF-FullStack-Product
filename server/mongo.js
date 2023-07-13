/* const MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://nsaimkorkmaz1:wv67K5VrDeGP8nCj@cluster0.ub8ffy5.mongodb.net/?retryWrites=true&w=majority";

const createProduct = async (req, res, next) => {
  const newProduct = {
    diet: req.body.day,
    cost: req.body.cost,
  };
  const client = MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection("cyf-fullstack-product").insertOne(newProduct);
  } catch (error) {
    return res.json({ message: "we could not store data" });
  }
  client.close();
  res.json(newProduct);
};

const getProduct = async (req, res, next) => {};

exports.createProduct = createProduct;
exports.getProduct = getProduct;
 */

const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const connectionString = process.env.ATLAS_URI;

// let conn;
// let db;
// (async () => {
//   try {
//     conn = await client.connect();
//   } catch (e) {
//     console.error(e);
//   }
//   db = conn.db("cyf-fullstack-product");
// })();

module.exports = (async function () {
  let db = null;
  MongoClient.connect(connectionString, function (err, client) {
    if (err) throw err;
    console.log("Connected successfully to server");
    db = client.db("cyf-fullstack-product");
  });

  return db;
})();
