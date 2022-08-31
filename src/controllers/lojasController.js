import shop from "../models/lojas.js";

class lojasController {

  static findLojas = (req, res)=>{
    shop.find((err, shop)=>{
      res.status(200).json(shop)
    })
  }
}
export default lojasController;
