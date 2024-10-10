import "dotenv/config";
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/?retryWrites=true&w=majority&appName=Globomantics`;
const dbName = "WorkoutBuilder";

let connected = false;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const connectToDB = async () => {
  if (!connected) {
    await client.connect();
    connected = true;
  }

  return client.db(dbName);
};

const closeDB = async () => {
  if (!connected) return;

  client.close();
  connected = false;
};

export { connectToDB, closeDB, client };
