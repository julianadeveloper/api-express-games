import products from "../models/produtos.js";

class productsController {
  static listproducts = (req, res) => {
    products.find((err, products) => {
      res.status(200).json(products);
    });
  };
  //criar o list by loja
  static listByprodutor = (req, res) => {
    const produtor = req.query.produtor;
    products.find({'produtor': produtor}, {}, (err, products) => {
      console.log(products)
      res.status(200).send(products);
    });
  };
  static findProductById = (req, res) => {
    const id = req.params.id;
    products.findById(id, (err, products) => {
      if (!err) {
        res.status(200).send(products);
      } else {
        res
          .status(400)
          .send({ message: `${err}, erro ao buscar id de usuário  ` });
      }
    });
  };

  static updateProducts = (req, res) => {
    const id = req.params.id;

    products.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send("Atualizado com sucesso!");
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
  static createproducts = (req, res) => {
    let produtos = new products(req.body);
    produtos.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err}` });
      } else {
        res.status(201).json(produtos.toJSON());
      }
    });
  };
  static deleteproducts = (req, res) => {
    const id = req.params.id;
    products.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Game excluído" });
      } else {
        res.status(400).send({ message: `${err}, Erro ao deletar jogo!` });
      }
    });
  };
}
export default productsController;
