import mongoose from "mongoose";

const shopSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String },
  endereco: { type: String },
});
//mongoose model - é uma ferramenta do mongoose paraa criar a colection (products) e o nome do schema; Cria no banco automaticamente
const shop = mongoose.model("lojas", shopSchema);
export default shop;
