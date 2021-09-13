import React, { useEffect, useReducer } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', [JSON.stringify(todos)]);
    }, [todos]);

    const handleAdd = (newTodo) => {

        dispatch({
            type:'add',
            payload: newTodo
        });

        console.log("Todos:", todos);
    }

    const handleDelete = ({ id }) => {

        const action = {
            type: "delete",
            payload: id
        }

        console.log(JSON.stringify(action, null, 3));

        dispatch(action);
    }

    const handleToggle = ({ id }) => {

        const action = {
            type: "toggle",
            payload: id
        }

        console.log(JSON.stringify(action, null, 3));

        dispatch(action);
    }

    return (
        <>
            <h1 data-testid="todos-output">TodoApp ( {todos.length} )</h1>
            <hr />
            <div className="row">
                <div className="col-md-6">

                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>
                <div className="col-md-3">
                    <TodoAdd handleAdd={ handleAdd }/>
                </div>
            </div>
        </>
    )
}
