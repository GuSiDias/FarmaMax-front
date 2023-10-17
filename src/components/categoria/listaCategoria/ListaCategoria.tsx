import { useEffect, useState } from "react";
import { categorias as categoriaDb } from "../../../database/categoriaDB";
import Categoria from "../../../model/Categoria";
import CardCategoria from "../cardCategoria/CardCategoria";
import { buscar } from "../../../service/Service";

export default function ListarCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>(categoriaDb);
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    setLoading(true);
    buscarCategoria();
  }, []);

  async function buscarCategoria() {
    setLoading(true);
    await buscar("/categorias",setCategorias, {headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20uYnIiLCJpYXQiOjE2OTQ1NTM4ODUsImV4cCI6MTY5NDU1NzQ4NX0.IjfWGssneXizQOGEpTG43YH8oVHC3UM6-vydSwRIXHY"}});
    setLoading(false);
  }

  if (loading) {
    return <h1>Carregando....</h1>;
  }

  if (categorias.length === 0) {
    return <h1>Nenhuma Categoria Cadastrada!</h1>;
  }

  return (
    <>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}