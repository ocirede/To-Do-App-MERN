import mongoose from "mongoose";
import { uri, dbName } from "./env.vars.js";

const connectDB = () =>{
    mongoose
    .connect(uri, {dbName})
    .then(() => {
    console.log("Mongodb connected ...", uri)

    });

    mongoose.connection.on("connected", () => {
        console.log("Mongoose connected to db...", uri);
    });

    mongoose.connection.on("disconnected", () => {
        console.log("MOngoose connection is disconnected...", uri)
    });
}

export default connectDB