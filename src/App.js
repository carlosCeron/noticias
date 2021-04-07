import {Fragment, useState, useEffect} from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {

    //Definir categorias y noticias
    const [categoria, guardarCategoria] = useState('');
    const [noticias, guardarNoticias] = useState([]);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=464beaf8e7954c739dd6e2e9fdbbbb05`;

            const respuesta = await fetch(url);
            const noticias = await respuesta.json();
            console.log(noticias.articles);
            guardarNoticias(noticias.articles);
        }
        consultarAPI();

    }, [categoria]);

  return (
      <Fragment>
        <Header titulo='Buscador de noticias'/>
        <div className="container white">
          <Formulario
              guardarCategoria={guardarCategoria}
          />
          <ListadoNoticias noticias={noticias}/>
        </div>
      </Fragment>
  );
}

export default App;
