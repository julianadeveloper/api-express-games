import express from "express";
import mongoose from "mongoose";
import db from "./config/dbConnection.js";

//import database

//impot dexpress
const app = express();

let games = [
  {
    id: 1,
    nome: "Resident Evil 4",
    ano: 2005,
    valor: 99.9,
    produtor: "Capcom",
  },
  {
    id: 2,
    nome: "God Of War 2",
    ano: 2007,
    valor: 99.9,
    produtor: "Santa Mônica Studios",
  },
  {
    id: 3,
    nome: "GTA: San andreas",
    ano: 2005,
    valor: 99.9,
    produtor: "Rockstar North",
  },
  {
    id: 4,
    nome: "Mortal Kombat",
    ano: 2005,
    valor: 99.9,
    produtor: "Rockstar North",
  },
];

app.use(express.json());

app.get("/games", (req, res) => {
  res.status(200).send(games);
});

app.get("/games/:id", (req, res) => {
  let index = buscaLivro(req.params.id);
  res.json(games[index]);
});

app.post("/games", (req, res) => {
  games.push(req.body);
  res.status(201).send('livro cadastrado"');
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
