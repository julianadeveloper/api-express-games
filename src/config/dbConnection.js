import mongoose from "mongoose";
import 'dotenv/config'

let db = mongoose.connect(process.env.MONGODB);
export default db;
