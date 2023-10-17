import CardProduto from "../cardProduto/CardProduto"
import vitamina from "../../../assets/vitamina.png"
import lenco from "../../../assets/umidecido.png"
import parecetamol from "../../../assets/parecetamol.png"
import xarope from "../../../assets/xarope.png"
import creme from "../../../assets/creme.png"

export default function ListarProduto() {
    return (
        <>   
            
        <div className="w-full flex justify-center items-center bg-red-100 gap-2 h-96 px-2">
            <CardProduto preco={50} nome="Vitamina D3 - " descricao="Frasco com 50 comprimidos" imagem={vitamina}></CardProduto>
            <CardProduto preco={90} nome="Lenços Umedecidos " descricao="Oftálmicos" imagem={lenco}></CardProduto>
            <CardProduto preco={30} nome="Creme Hidratante" descricao=" para as mãos" imagem={creme}></CardProduto>
            <CardProduto preco={25} nome="Paracetamol 750 mg " descricao="- 20 comprimidos" imagem={parecetamol}></CardProduto>
            <CardProduto preco={85} nome="Xarope para tosse" descricao=" - 250 ml" imagem={xarope}></CardProduto>
        </div>
                 
      </>
    );
}