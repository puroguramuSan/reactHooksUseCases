import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAdd }) => {

    const [{ description }, handleInputChange, reset] = useForm({ description: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
    
            if (description.trim().length <= 1) {
    
                alert("Por favor ingrese una tarea válida");
    
                return;
            }
    
            const newTodo = {
                id: new Date().getTime(),
                desc: description,
                done: false
            }
    
            handleAdd(newTodo);
    
            reset();
    }

    return (
        <>
            <h4>Aregar Tarea</h4>
                    <hr />

                    <form className="d-flex flex-column"
                        onSubmit={handleSubmit}>
                        <input className="form-control"
                            name="description"
                            placeholder="Nombre de la tarea"
                            value={description}
                            onChange={handleInputChange}></input>
                        <button type="submit"
                            className="btn btn-outline-success mt-3 ">Agregar</button>
                    </form>
        </>
    )
}
