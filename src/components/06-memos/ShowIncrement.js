import React from 'react'
import PropTypes from 'prop-types';

export const ShowIncrement = React.memo(({ incrementar }) => {

    console.log("Me volvi a generar :(");
    
    return (
        <div>
            <button className="btn btn-primary" onClick={ () => { incrementar(5) } }>Incrementar</button>
        </div>
    )
})


ShowIncrement.defaultProps = {
    incrementar: PropTypes.func.isRequired
};