import React, { useState } from 'react';
import '../03-examples/customHooks.css';

import { MultipleCustomHooks } from '../../components/03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {
    
    const [ show, setShow ] = useState(false);

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr/>

            { show && <MultipleCustomHooks />}

            <button className="btn btn-primary mt-3" data-testid="show-btn" onClick = { () => { setShow(!show) }}>Show/Hide</button>
        </div>
    )
}
