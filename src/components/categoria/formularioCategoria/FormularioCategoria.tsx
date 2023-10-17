import { BaseSyntheticEvent, ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../model/Categoria";
import { buscar, cadastrar, atualizar} from "../../../service/Service";

export default function FormularioCategoria() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    prescricao: "",
    tipo: "",
  });
  const [loading, setLoading] = useState<boolean>();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id !== undefined) {
      setLoading(true);
      buscarPorId(id);
    }
  }, [id]);

  useEffect(()=>{
    const categoria = categorias.find((x)=>x.id == id);
    if (categoria) {
      setCategoria(categoria);
    }
  },[categorias]);

  function handleChangePrescricao(value: string) {
    setCategoria((categoria) => {
      return { prescricao: value, id: categoria.id };
    });
  }

  function handleChangeTipo(value: string) {
    setCategoria((categoria) => {
      return { tipo: value, id: categoria.id };
    });
  }

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

  async function gravarCategoria(e: BaseSyntheticEvent) {
    e.preventDefault();

    if (id !== undefined) {
      await atualizarCategoria();
    } else {
      await cadastrarCategoria();
    }
  }

  async function atualizarCategoria() {
    await atualizar("/categorias", categoria, setCategorias, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20uYnIiLCJpYXQiOjE2OTQ1NTM4ODUsImV4cCI6MTY5NDU1NzQ4NX0.IjfWGssneXizQOGEpTG43YH8oVHC3UM6-vydSwRIXHY",
      },
    });
    alert("Categoria Atualizada com Sucesso!");
    retornar();
  }

  async function cadastrarCategoria() {
    await cadastrar("/categorias", categoria, setCategorias, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20uYnIiLCJpYXQiOjE2OTQ1NTM4ODUsImV4cCI6MTY5NDU1NzQ4NX0.IjfWGssneXizQOGEpTG43YH8oVHC3UM6-vydSwRIXHY",
      },
    });
    alert("Categoria Cadastrada com Sucesso!");
    retornar();
  }

  function retornar() {
    navigate("/categoria");
  }

  if (loading) {
    return <h1>Carregando....</h1>;
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastre uma nova categoria" : "Editar categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gravarCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="prescricao">Categoria</label>
          <input
            type="text"
            placeholder="Prescrição"
            name="prescricao"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.prescricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChangePrescricao(e.target.value)
            }
          />
          <div className="flex flex-col gap-2" >
          <label htmlFor="Tipo">Categoria</label>
              <input
                type="text"
                placeholder="Tipo"
                name="tipo"
                className="border-2 border-slate-700 rounded p-2"
                value={categoria.tipo}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleChangeTipo(e.target.value)
                }
              />
          </div>
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? "Cadastrar" : "Editar"}
        </button>
      </form>
    </div>
  );
}