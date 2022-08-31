import shop from "../models/lojas.js";

class lojasController {

  static findShop = (req, res)=>{
    shop.find((err, shop)=>{
      res.status(200).json(shop)
    })
  }
}
export default lojasController;
