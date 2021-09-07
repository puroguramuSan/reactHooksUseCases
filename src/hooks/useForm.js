import { useState } from 'react';

export const useForm = ( initialState = {} ) => {
    const [ values, setValues ] = useState( initialState );

    const handleInputChange = ({ target }) => {
        
        setValues( {
            ...values,
            [target.name]: target.value
        } );
    }

    const reset = ( values = undefined ) => {
        setValues( !values && initialState );
    }

    return [values, handleInputChange, reset ];
}