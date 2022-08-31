import mongoose from "mongoose"


const lojasSchema = new mongoose.Schema(
{
  id: {type: String},
  nome: {type: String},
  endereco: {type:String}
})
//mongoose model - é uma ferramenta do mongoose paraa criar a colection (lojas) e o nome do schema; Cria no banco automaticamente
 const shop = mongoose.model('lojas', lojasSchema);
 export default shop;