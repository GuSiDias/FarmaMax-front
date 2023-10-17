import Produto from "../model/Produto";

let contador = 1;
let produtos: Produto[] = [];

const removerProduto = (id: number) => {
  produtos = produtos.filter((x) => x.id !== id);
};

const adicionarProduto = (produto: Produto) => {
    if (produto.id == 0) {
      contador++;
      produto.id = contador;
    }
  produtos.push(produto);
};

const atualizarProduto = (produto: Produto) => {
  removerProduto(produto.id);
  produtos.push(produto);
};

export { produtos, removerProduto, adicionarProduto, atualizarProduto };