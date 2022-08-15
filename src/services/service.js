export default function buscaLivro(id) {
  return games.findIndex(games => games.id == id)
}