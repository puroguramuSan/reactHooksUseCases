import React, { useState, useCallback, useEffect } from 'react';
import '../03-examples/customHooks.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [ counter, setCounter ] = useState(1);

    const incrementar = useCallback((num) => {
        
        setCounter(c => c + num);

    }, [setCounter]);

    useEffect(() => {
        /* Cuando useEffect tiene como dependencia una función, se debe de utilizar useCallback para evitar que el efecto
        se ejecute cada vez que se renderiza el componente */
    }, [incrementar]);

    return (
        <div>
            <h1>Counter: { counter }</h1>

            <ShowIncrement incrementar={ incrementar } />
        </div>
    )
}
