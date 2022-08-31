import productsController from '../controllers/productsController';



describe("Teste o caminho raiz", () => {
  it("Deve responder o método GET",  () => {
    const Produto1 = {
      id: "123",
      marca: "Teste" ,
      modelo: "teste",
      descricao:  "teste",
      sistema: "teste",
      chips: "teste",
      preco: "teste",
      quantidade: "teste",
      vendido_em: "teste"
    }

    const response =  productsController.listproducts(Produto1)
    expect(response).toEqual(Produto1)
    console.log(response)
    
  });
});
