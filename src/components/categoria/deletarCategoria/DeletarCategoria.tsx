import { useNavigate } from "react-router";
import Categoria from "../../../model/Categoria";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { buscar, deletar } from "../../../service/Service";
import { toastAlerta } from "../../../util/toastAlerta";


export default function DeletarCategoria() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>();
  const [loading, setLoading] = useState<boolean>();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id !== undefined) {
      setLoading(true);
      buscarPorId(id);
    }
  }, [id]);

  useEffect(() => {
    const categoria = categorias.find((x) => x.id == +id);
    if (categoria) {
      setCategoria(categoria);
    }
  }, [categorias]);

  async function buscarPorId() {
    setLoading(true);
    await buscar("/categorias", setCategorias, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20uYnIiLCJpYXQiOjE2OTQ1NTM4ODUsImV4cCI6MTY5NDU1NzQ4NX0.IjfWGssneXizQOGEpTG43YH8oVHC3UM6-vydSwRIXHY",
      },
    });
    setLoading(false);
  }

  function retornar() {
    navigate("/categoria");
  }

  async function deletarCategoria() {
    if (categoria) {
      deletar(`/categorias/${id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20uYnIiLCJpYXQiOjE2OTQ1NTM4ODUsImV4cCI6MTY5NDU1NzQ4NX0.IjfWGssneXizQOGEpTG43YH8oVHC3UM6-vydSwRIXHY",
        },
      });
      toastAlerta("Categoria Removida!",'sucesso');
      retornar();
    }
  }

  if (loading) {
    return <h1>Carregando....</h1>;
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Remover Categoria</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
          Categoria
        </header>
        <p className="p-8 text-3xl bg-slate-200 h-full">
          {categoria?.prescricao}
        </p>
        <p className="p-8 text-3xl bg-slate-200 h-full">
          {categoria?.tipo}
        </p>
        <div className="flex">
          <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center"
            onClick={deletarCategoria}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}