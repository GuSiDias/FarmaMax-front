import Categoria from "../model/Categoria";

let contador = 1;
let categorias: Categoria[] = [];

const removerCategoria = (id: number) => {
  categorias = categorias.filter((x) => x.id !== id);
};

const adicionarCategoria = (categoria: Categoria) => {
  if (categoria.id == 0) {
    contador++;
    categoria.id = contador;
  }
  categorias.push(categoria);
};

const atualizarCategoria = (categoria: Categoria) => {
  removerCategoria(categoria.id);
  categorias.push(categoria);
};

export { categorias, removerCategoria, adicionarCategoria, atualizarCategoria };