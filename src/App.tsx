import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './paginas/home/Home';
import ListarCategorias from "./components/categoria/listaCategoria/ListaCategoria";
import FormularioCategoria from "./components/categoria/formularioCategoria/FormularioCategoria";
import DeletarCategoria from "./components/categoria/deletarCategoria/DeletarCategoria";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categoria" element={<ListarCategorias />} />
            <Route path="/cadastraCategoria" element={<FormularioCategoria />} /> 
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} /> 
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />             
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;