import express from "express";
import db from "./config/dbConnection.js";
import routes from './routes/index.js'

//conexão com banco de dados
db.on("error", () => console.log("Database connection failure")); 
db.once("open", () => {
  console.log("conectado ao banco com sucesso")
});

//impot dexpress
const app = express();
//instanciado app dentro do routes 
routes(app)



export default app;
