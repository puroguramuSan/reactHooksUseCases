import React, { useState, useEffect } from 'react';
import './simpleForm.css';
import { Message } from './Message';

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        name:'',
        email:''
    });

    const { name, email } = formState;

    useEffect( () => {
        console.log('hey!');
    }, []);

    useEffect( () => {
        console.log('formState cambió');
    }, [formState]);

    useEffect( () => {
        console.log('name cambió');
    }, [name]);

    useEffect( () => {
        console.log('email cambió');
    }, [email]);

    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }
    
    return (
        <div>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input type="text" name="name" className="form-control"
                        placeholder="Nombre" autoComplete="off" value = { name }
                            onChange={ handleInputChange }></input>
                <input type="email" name="email" className="form-control"
                        placeholder="Email" autoComplete="off" value = { email }
                            onChange={ handleInputChange }></input>
            </div>

            { (name === "123") && <Message />}
        </div>
    )
}
