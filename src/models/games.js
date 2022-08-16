// export class Produts{
//   constructor(_id, nome, valor, produto){
//     this.id = _id,
//     this.nome = nome,
//     this.valor = valor,
//     this.produtor = produtor,

//   }
// }

import mongoose from "mongoose"


const gameSchema = new mongoose.Schema(
{
  id: {type: String},
  nome: {type: String, required: true},
  valor: {type: Number, required: true},
  produtor: {type: String, required:true},
  quantidade: {type: Number},
})
//mongoose model - é uma ferramenta do mongoose paraa criar a colection (games) e o nome do schema; Cria no banco automaticamente
 const games = mongoose.model('games', gameSchema);
 export default games;