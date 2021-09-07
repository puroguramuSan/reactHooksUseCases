import React from 'react'

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
    return (
        <li key={index}
            className="d-flex align-items-center justify-content-center mt-3">
            <p className={`text-center mb-0 ${todo.done && "completed"}`}>{index + 1}. {todo.desc}</p>
            <button className="btn btn-danger ms-3" onClick={() => { handleDelete(todo) }}>Borrar</button>
            <button className="btn btn-success ms-3" onClick={() => { handleToggle(todo) }} >Completar</button>
        </li>
    )
}
