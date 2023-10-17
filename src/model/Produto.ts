import Categoria from "./Categoria";

export default interface Produto {
    id: number; 
    nome: string; 
    descricao: string; 
    preco: number;
    imagem: string;
    categoria: Categoria | null;
}