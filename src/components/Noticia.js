import React from 'react';
import PropTypes from 'prop-types';
import Formulario from "./Formulario";

const Noticia = ({noticia}) => {

    const {urlToImage, url, title, description, source} = noticia;
    const imagen = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt={title}/>
        </div>
        : null;
    return (
        <div>
            <div className="col s12 m6 l4">
                <div className="card">
                    {imagen}
                    <div className="card-content">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                    <div className="card-action">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="waves-effect waves-light btn"
                            href={url}>Ver noticia </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

Noticia.propType = {
    noticia: PropTypes.object.isRequired
}

export default Noticia;
