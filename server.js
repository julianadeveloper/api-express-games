import app from './src/app.js'
// requisição http ( require / forma de import)
// const http = require('http')
//porta para listar o servidor
const port = process.env.PORT 
//requisição http + create server : criar um server q vai usar a requisição (express)
// const server = http.createServer((req, res)=>{
//   //req = requisição : parametro
//   //res = resposta : parametro
//   // res.writeHead(200, {'Content-type': 'text/plain'})
//   // //WriteHeader = cabeçalho // 200: status da res // tipo da res (poderia ser JSON)
//   // res.end(routes[req.url])
//   // res final (end) - texto 
// });

//listen - função para rodar o server na porta escolhida
app.listen(port, ()=>{
  console.log(`server listen in: http://localhost:${port}`)
})