import React from 'react'
import { Link, } from 'react-router-dom'
import logo from '../../assets/logo.png'
import user from '../../assets/user.png'
import car from '../../assets/carrinho.png'


function Navbar() {
    return (
        <div className='w-full bg-indigo-900 text-white flex justify-center py-3'>
          <div className="container flex items-center justify-between text-lg me-8 ">
            <Link to="/home" className=''> <img src={logo} alt='' className='w-3/4 '/> </Link>

            <div className='flex px-2.5'>
              <label className="relative block w-96">
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 text-black rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Pesquisar" type="text" name="search"/>
              </label>
            </div>

            <div className='flex  gap-4'>
              <Link to="/categoria" className='hover:underline'>Categorias</Link>
              <Link to="/cadastraCategoria" className='hover:underline'>Cadastrar categoria</Link>
              <div  className='hover:underline'><img src={user} alt='' className='w-3/4'/></div>
              <div  className='hover:underline'><img src={car} alt='' className='w-3/4'/></div>
            </div>
          </div>
        </div>
      )
    }



export default Navbar