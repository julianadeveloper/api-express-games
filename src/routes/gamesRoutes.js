import express from "express";
import gamesController from "../controllers/gamesController.js";

 const router = express.Router();


router
.get("/games", gamesController.listGames)
.get("/games/:produtora", gamesController.listByprodutora)
.get("/games/:id", gamesController.findGameById)
.post("/games", gamesController.createGames)
.put("/games/:id", gamesController.updateGame)
.delete("/games/:id", gamesController.deleteGames)
export default router;