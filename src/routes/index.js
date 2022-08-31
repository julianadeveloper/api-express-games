import express from "express";
import products from "./productsRoutes.js";
import lojas from "./productsRoutes.js"

const routes = (app)=>{
  app.route('/').get((req, res)=>{
    res.status(200).send('Welcome to a list products')
  })

  app.use(
    express.json(),
    products,
    lojas
  )
}

export default routes;///