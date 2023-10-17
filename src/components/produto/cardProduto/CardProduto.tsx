
interface CardProdutoProps {
    nome: string; 
    descricao: string; 
    preco: number;
    imagem: string;
  }
  
  export default function CardProduto(produto: CardProdutoProps) {
  
      function formatarReais(preco:number){
          const real = new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
          });
          return real.format(preco);
          
          
      }
  
    return (
      <div className="w-3/12 rounded-lg bg-white overflow-hidden">
        <div className="flex flex-col justify-center items-center px-2 py-2 h-72">
          <img className="w-48 h-48 block" src={produto.imagem}></img>
          <p className='text-base text-center list-outside'>{produto.nome} {produto.descricao}</p>
          <p className='text-xl font-bold'>{formatarReais(produto.preco)}</p>
        </div>
        <button className="w-full text-center text-white bg-blue-600 py-2 px-2">
          Comprar
        </button>
      </div>
    );
  }