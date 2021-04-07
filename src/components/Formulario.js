import React from 'react';
import styles from './Formulario.module.css';
import useSelect from "../hooks/useSelect";
import Header from "./Header";
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {

    // submit al form App.js

    const buscarNoticias = e => {
        e.preventDefault();
        guardarCategoria(categoria);
    }

    const OPCIONES = [
        {value: 'General', label: 'General'},
        {value: 'business', label: 'Business'},
        {value: 'entertainment', label: 'Entertainment'},
        {value: 'health', label: 'Health'},
        {value: 'science', label: 'Ciencia'},
        {value: 'technology', label: 'Tecnologia'},
    ]

    // Usar custom hook
    const [categoria, SelectNoticias] = useSelect('General', OPCIONES);

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8  offset-m2">
                <form onSubmit={buscarNoticias}>
                    <h2 className={styles.heading}>Encuentra noticias por categoria:</h2>
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value='Buscar'
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

Formulario.propType = {
    guardarCategoria: PropTypes.func.isRequired
}

export default Formulario;
