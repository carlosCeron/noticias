import React, {useState} from 'react';

// rsc command template
const useSelect = (stateInicial, opciones) => {

    const [state, actualizarState] = useState('');

    const SelectNoticias = () => (
        <select
            className="browser-default"
            name="select"
            id="select">
            <option value="">Seleccione</option>
        </select>
    );

    return [state, SelectNoticias];
};

export default useSelect;
