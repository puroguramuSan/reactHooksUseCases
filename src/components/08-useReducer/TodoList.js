import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            <div className="row">

                {
                    todos.map((todo, index) => (

                        <TodoListItem todo={todo}
                            index={index}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle} />

                    ))
                }

            </div>
        </ul>
    )
}
