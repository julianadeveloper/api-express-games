import express from "express";
import games from "./gamesRoutes.js";


const routes = (app)=>{
  app.route('/').get((req, res)=>{
    res.status(200).send('Welcome to a list games')
  })

  app.use(
    express.json(),
    games
  )
}

export default routes;///