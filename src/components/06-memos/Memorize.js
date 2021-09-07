import React, { useState } from 'react';
import '../03-examples/customHooks.css';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {

    const { counter, increment } = useCounter(10);

    const [ show, setShow ] = useState(true);

    return (
        <div>
            
            <h1>Counter: <small><Small counter={ counter }/></small></h1>

            <button className="btn btn-primary" onClick={ increment }>+1</button>

            <button className="btn btn-primary ml-3"
                        onClick= { () => { setShow(!show) } }>Show/Hide { JSON.stringify(show) }</button>
        </div>
    )
}
