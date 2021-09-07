import React, { useRef } from 'react';
import '../03-examples/customHooks.css';

export const FocusScreen = () => {
    
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>focus Screen</h1>
            <hr/>
            
            <input ref={ inputRef }
                    className="form-control"
                    placeholder="Nombre"/>

            <button className="btn btn-primary mt-3"
                    onClick={ handleClick }>Focus</button>
        </div>
    )
}
