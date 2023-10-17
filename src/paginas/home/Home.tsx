import React from 'react';
import homeLogo from '../../assets/home.png'
import './Home.css';
import ListarProduto from '../../components/produto/listaProduto/ListaProduto';


function Home() {
    return (
        <>
        <div className="bg-cyan-300 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl text-black font-bold'>Seja bem vinde!</h2>
              <p className='text-xl text-black'>Seus medicamentos e cosméticos você so encontra aqui!</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-indigo-900 text-white py-2 px-4'>Cadastrar produtos</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <div className='bg-red-100'><ListarProduto/></div>
        
      </>
    );
}

export default Home;