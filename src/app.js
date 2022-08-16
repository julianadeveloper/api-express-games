import express from "express";
import games from "./models/games.js";
import db from "./config/dbConnection.js";
//import database

db.on("error", () => console.log("Database connection failure")); 
db.once("open", () => {
  console.log("conectado ao banco com sucesso")
});
//impot dexpress
const app = express();

app.use(express.json());

app.get("/games", (req, res) => {
  //chamando colecao do mongo
  games.find((err, games) => {
    res.status(200).json(games);
  });
});

app.get("/games/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  res.json(games[index]);
});

app.post("/games", (req, res) => {
  games.create(games)
  res.status(201).json(games);
});

app.put("/games/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  games[index].nome = req.body.nome;  
  res.json(games);
});

app.delete("/games/:id", (req, res) => {
  let { id } = req.params;
  let index = buscaLivro(id);
  games.splice(index, 1);
  res.json(games);
  // games[index].id =
});
//seria meu serviço de busca.

function buscaLivro(id) {
  return games.findIndex((games) => games.id == id);
}
export default app;
