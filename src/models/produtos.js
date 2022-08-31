import mongoose from "mongoose"


const productsSchema = new mongoose.Schema(
{
  id: {type: String},
  marca: {type: String, required: true},
  modelo: {type: String, required:true},
  descricao: {type: String},
  sistema: {type:String},
  memoria: {type: String},
  chips: {type: Number},
  preco: {type: Number, required: true},
  quantidade: {type: Number},
  vendido_em: {type: Array, required:true}
})
//mongoose model - é uma ferramenta do mongoose paraa criar a colection (products) e o nome do schema; Cria no banco automaticamente
 const products = mongoose.model('produtos', productsSchema);
 export default products;