import mongoose from "mongoose";

mongoose.connect("mongodb+srv://victorLeo:123@cluster0.qctxh.mongodb.net/alura-node")

let db = mongoose.connection;

export default db;