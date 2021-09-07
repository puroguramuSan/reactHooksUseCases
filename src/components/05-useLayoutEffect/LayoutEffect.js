import React, { useLayoutEffect, useRef, useState } from 'react';
import '../03-examples/customHooks.css';

import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const LayoutEffect = () => {

    const { counter, increment, decrement, reset } = useCounter(1);

    const state = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);

    const { data } = state;

    const { author, quote } = !!data && data[0];

    const pTag = useRef();

    const [ box, setBox ] = useState();

    useLayoutEffect( () => {
        
        setBox(JSON.stringify(pTag.current.getBoundingClientRect(), null, 3));

    }, [quote]);

    return (

        <div>

            <h1>Custom Hooks!!!</h1>

            <blockquote className="blockquote text-right d-flex">
                <p ref={ pTag }>{quote}</p>
                <footer className="blockquote-footer"> {author} </footer>
            </blockquote>

            <button className="btn btn-primary" onClick={decrement}>Anterior</button>
            <button className="btn btn-primary mr-3" onClick={increment}>Siguiente</button>
            <button className="btn btn-primary mr-3" onClick={reset}>Reiniciar</button>

            <pre> { box } </pre>

        </div>

    )
}
