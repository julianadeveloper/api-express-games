import games from "../models/games.js";

class gamesController {
  static listGames = (req, res) => {
    games.find((err, games) => {
      res.status(200).json(games);
    });
  };
  static listByprodutora = (req, res) => {
    const produtora = req.query.params;
    games.find({ produtora: produtora }, {}, (err, games) => {
      res.status(200).send(games);
    });
  };
  static findGameById = (req, res) => {
    const id = req.params.id;
    games.findById(id, (err, games) => {
      if (!err) {
        res.status(200).send(games);
      } else {
        res
          .status(400)
          .send({ message: `${err}, erro ao buscar id de usuário  ` });
      }
    });
  };

  static updateGame = (req, res) => {
    const id = req.params.id;

    games.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send("Atualizado com sucesso!");
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
  static createGames = (req, res) => {
    let game = new games(req.body);
    game.save((err) => {
      if (err) {
        res.status(500).send({ message: `${err}` });
      } else {
        res.status(201).json(game.toJSON());
      }
    });
  };
  static deleteGames = (req, res) => {
    const id = req.params.id;
    console.log(id);

    games.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Game excluído" });
      } else {
        res.status(400).send({ message: `${err}, Erro ao deletar jogo!` });
      }
    });
  };
}
export default gamesController;
