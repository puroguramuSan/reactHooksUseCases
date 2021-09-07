import React, { useState, useMemo } from 'react';
import '../03-examples/customHooks.css';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';
import { procesoPesado } from '../../helpers/procesoPesado';

export const MemoHook = () => {

    const { counter, increment } = useCounter(10);

    const [ show, setShow ] = useState(true);

    const memoProcesoPesado = useMemo( () => procesoPesado(counter), [counter]);

    return (
        <div>
            
            <h1>Counter: <small><Small counter={ counter }/></small></h1>

            <p>Iteraciones { memoProcesoPesado }</p>

            <button className="btn btn-primary" onClick={ increment }>+1</button>

            <button className="btn btn-primary ml-3"
                        onClick= { () => { setShow(!show); } }>Show/Hide { JSON.stringify(show) }</button>
        </div>
    )
}
