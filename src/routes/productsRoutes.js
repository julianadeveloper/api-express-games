import express from "express";
import productsController from "../controllers/productsController.js";

 const router = express.Router();


// router
// .get("/products", productsController.listproducts)
// .get("/products/produtor", productsController.listByprodutor)
// .get("/products/:id", productsController.findGameById)
// .post("/products", productsController.createproducts)
// .put("/products/:id", productsController.updateGame)
// .delete("/products/:id", productsController.deleteproducts)

router
.get("/produtos", productsController.listproducts)
.get("/lojas", lojasController.findShop)
.get("/produtos/:id", productsController.findProductById)
.post("/produtos", productsController.createproducts)
.put("/produtos/:id", productsController.updateProducts)
.delete("/produtos/:id", productsController.deleteproducts)
export default router;