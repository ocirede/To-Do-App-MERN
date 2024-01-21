import "dotenv/config";


const uri = process.env.MONGO_URI;
const port = process.env.PORT;
const dbName = process.env.DB_NAME;

export { uri, port, dbName };