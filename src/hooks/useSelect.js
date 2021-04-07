import React, {useState} from 'react';

// rsc command template
const useSelect = (stateInicial, opciones) => {

    const [state, actualizarState] = useState(stateInicial);

    const SelectNoticias = () => (
        <select
            className="browser-default"
            name="select"
            id="select"
            value={state}
            onChange={event => actualizarState(event.target.value)}
        >
            {opciones.map(opcion => (
                <option
                    key={opcion.value}
                    value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    );

    return [state, SelectNoticias];
};

export default useSelect;
