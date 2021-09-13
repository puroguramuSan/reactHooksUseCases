import { useReducer } from 'react';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { todos as demoTodos } from '../../fixtures/demoTodos';

describe("Pruebas en todoReducer", () => {

    test("Probando que se regrese el estado inicial", () => {

        const todos = todoReducer( demoTodos, {} );

        expect( todos ).toEqual( demoTodos );

    });
    
    test("Probando que se agregue un todo correctamente", () => {

        const newTodo = { id: 3, desc: "Todo 3", done: false };

        const todos = todoReducer( demoTodos, { type: "add", payload: newTodo } );

        expect( todos ).toEqual( [ ...demoTodos, newTodo ] );
    });

    test("Probando la accion de borrar una entrada", () => {

        const entryId = 1;

        const todos = todoReducer( demoTodos, { type: "delete", payload: entryId });

        console.log( todos.find( el => el.id ===  entryId ) );

        expect( todos.length ).toBe( demoTodos.length - 1 );
        expect( todos.find( el => el.id ===  entryId ) ).toBe( undefined );
    });

    test("Probando la accion toggle del reducer", () => {

        const entryId = 1;
        const todos = todoReducer( demoTodos, { type: "toggle", payload: entryId } );

        console.log( todos );

        expect( todos[entryId-1].done ).toBe( !demoTodos[entryId].done );
    });
});