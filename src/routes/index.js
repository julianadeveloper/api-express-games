import express from "express";
import shop from "../models/lojas.js";
import products from "./productsRoutes.js";

const routes = (app)=>{
  app.route('/').get((req, res)=>{
    res.status(200).send('Welcome to a list products')
  })

  app.use(
    express.json(),
    products,
    shop
  )
}

export default routes;///