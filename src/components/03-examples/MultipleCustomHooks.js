import React from 'react';
import './customHooks.css';

import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement, reset } = useCounter(1);

    const state = useFetch(`https://breakingbadapi.com/api/quotes/${ counter }`);

    console.log(counter)

    const { loading, data } = state;

    const { author, quote } = !!data && data[0];

    console.log(author, quote);

    return (

        <div>

            <h1>Custom Hooks!!!</h1>

            {
                loading ?
                ( 
                    <div className="alert alert-info text-center" data-testid="loading-output">
                        Loading...
                    </div>
                ) :
                (
                    <blockquote className="blockquote text-right">
                        <p data-testid="quote-output">{ quote }</p>
                        <footer className="blockquote-footer" data-testid="author-output"> { author } </footer>
                    </blockquote>
                )
            }

            <button className="btn btn-primary" onClick= { decrement }>Anterior</button>
            <button className="btn btn-primary mr-3" onClick= { increment }>Siguiente</button>
            <button className="btn btn-primary mr-3" onClick= { reset }>Reiniciar</button>

        </div>

    )
}
