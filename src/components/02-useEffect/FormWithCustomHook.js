import React, { useEffect } from 'react';
import './simpleForm.css';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {
    
    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect( () => {

        console.log("email cambió");
    }, [email]);

    const handleSubmit = (e) => {
        
        e.preventDefault();

        console.log(formValues);
    }
    
    return (
        <div>
            <h1>useEffect</h1>
            <hr/>

            <form onSubmit = { handleSubmit } className="form-group">
                <input type="text" name="name" className="form-control mt-3"
                        placeholder="Nombre" autoComplete="off" value = { name }
                            onChange={ handleInputChange }></input>
                <input type="email" name="email" className="form-control mt-3"
                        placeholder="Email" autoComplete="off" value = { email }
                            onChange={ handleInputChange }></input>
                <input type="password" name="password" className="form-control mt-3"
                        placeholder="Password" autoComplete="off" value = { password }
                            onChange={ handleInputChange }></input>

                <button type="submit" className="btn btn-primary mt-3">Enviar</button>
            </form>
        </div>
    )
}
