import { BaseSyntheticEvent, ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../model/Categoria";
import { buscar, cadastrar, atualizar} from "../../../service/Service";
import { toastAlerta } from "../../../util/toastAlerta";
import { categorias } from "../../../database/categoriaDB";


export default function FormularioCategoria() {
  const navigate = useNavigate();
  
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    prescricao: "",
    tipo: "",
  });
  const [loading, setLoading] = useState(false);
  

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    await buscar(`/categoria/${id}`, setCategoria, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20uYnIiLCJpYXQiOjE2OTQ1NTM4ODUsImV4cCI6MTY5NDU1NzQ4NX0.IjfWGssneXizQOGEpTG43YH8oVHC3UM6-vydSwRIXHY",
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {

      buscarPorId(id);
    }
  }, [id]);

  useEffect(()=>{
    const categoria = categorias.find((x)=>x.id == +id);
    if (categoria) {
      setCategoria(categoria);
    }
  },[categorias]);

  function handleChangePrescricao(value: string) {
    setCategoria((categoria) => {
      return { prescricao: value, id: categorias.id };
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
        try {
          await atualizar(`/categoria`, categorias, setCategorias, {
            headers: {
              'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20uYnIiLCJpYXQiOjE2OTQ1NTM4ODUsImV4cCI6MTY5NDU1NzQ4NX0.IjfWGssneXizQOGEpTG43YH8oVHC3UM6-vydSwRIXHY"
            }
          })
  
          toastAlerta('Categoria atualizado com sucesso', 'sucesso')
          retornar()
  
        } catch (error: any) {
          if (error.toString().includes('403')) {
            toastAlerta('O token expirou, favor logar novamente', 'info')
          } else {
            toastAlerta('Erro ao atualizar a Categoria', 'erro')
          }
  
        }
  
      } else {
        try {
          await cadastrar(`/categoria`, categorias, setCategorias, {
            headers: {
              'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20uYnIiLCJpYXQiOjE2OTQ1NTM4ODUsImV4cCI6MTY5NDU1NzQ4NX0.IjfWGssneXizQOGEpTG43YH8oVHC3UM6-vydSwRIXHY"
            }
          })
  
          toastAlerta('Categoria cadastrado com sucesso', 'sucesso')
  
        } catch (error: any) {
          if (error.toString().includes('403')) {
            toastAlerta('O token expirou, favor logar novamente', 'info')
        
          } else {
            toastAlerta('Erro ao cadastrado a Categoria', 'erro')
          }
        }
      }
  
      retornar()
    }

  function retornar() {
    navigate("/categoria");
  }



  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar categoria" : "Editar categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gravarCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="prescricao">Prescrição</label>
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