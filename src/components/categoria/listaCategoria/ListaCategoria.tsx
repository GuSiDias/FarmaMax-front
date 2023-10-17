import { useEffect, useState } from "react";
import { categorias as categoriaDB } from "../../../database/categoriaDB";
import Categoria from "../../../model/Categoria";
import CardCategoria from "../cardCategoria/CardCategoria";
import { buscar } from "../../../service/Service";
import { toastAlerta } from "../../../util/toastAlerta";
import { Dna } from 'react-loader-spinner';


export default function ListarCategoria() {
  const [categoria, setCategorias] = useState<Categoria[]>(categoriaDB);
  

  async function buscarCategoria() {
    try{ 
        buscar("/categoria",setCategorias, {headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBlbWFpbC5jb20uYnIiLCJpYXQiOjE2OTQ1NTM4ODUsImV4cCI6MTY5NDU1NzQ4NX0.IjfWGssneXizQOGEpTG43YH8oVHC3UM6-vydSwRIXHY",

     },
    });
    }catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
        }
    }
  }
  
    useEffect(() => {
        buscarCategoria();
      }, [categoria.length]);
     
   
  
  

 
  return (
    <>
    {categoria.length === 0 && (
             <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categorias) => (
              <CardCategoria key={categorias.id} categoria={categorias} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}