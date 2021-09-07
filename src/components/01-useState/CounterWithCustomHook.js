import React from 'react';
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const { state:counter , increment, decrement, reset } = useCounter();
    return (
        <div>
            <h1>Counter with custom hook: { counter }</h1>
            <hr/>
            <button className="btn" onClick = { () => { increment(3) } }> +1 </button>
            <button className="btn" onClick = { () => { decrement(3) } }> -1 </button>
            <button className="btn" onClick = { reset } > Reset </button>
        </div>
    )
}
