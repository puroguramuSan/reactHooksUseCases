import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { todos as demoTodos } from '../../fixtures/demoTodos'; 

describe("Pruebas en el componente <TodoListItem />", () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    test("Probando que el componente se renderize correctamente", () => {

        render( <TodoListItem todo={ demoTodos[0] } index={ 0 } 
                    handleDelete={ () => {} } handleToggle={ () => {} }/> );

        const deleteBtn = screen.getByTestId("delete-btn");
        const toggleBtn = screen.getByTestId("toggle-btn");

        expect( deleteBtn ).toBeInTheDocument();
        expect( toggleBtn ).toBeInTheDocument();

    });

    test("Probando que se llame la función handleDelete", () => {
        
        render( <TodoListItem todo={ demoTodos[0] } index={ 0 } 
            handleDelete={ handleDelete } handleToggle={ handleToggle }/> );

        const deleteBtn = screen.getByTestId("delete-btn");

        userEvent.click( deleteBtn );

        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0] );

    });

    test("Probando que se llame la función handleToggle", () => {

        render( <TodoListItem todo={ demoTodos[0] } index={ 0 } 
            handleDelete={ handleDelete } handleToggle={ handleToggle }/> );

        const toggleBtn = screen.getByTestId("toggle-btn");

        userEvent.click( toggleBtn );

        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0] );
    });

    test("Probando que se muestre correctamente la descripción de la tarea", () => {

        render( <TodoListItem todo={ demoTodos[0] } index={ 0 } 
            handleDelete={ handleDelete } handleToggle={ handleToggle }/> );

        const descOutput = screen.getByTestId("desc-output");

        expect( descOutput ).toHaveTextContent( demoTodos[0].desc );
    });

    test("testid='desc-output' debe de tener la clase completed", () => {

        const todo = { ...demoTodos[0], done: true};

        render( <TodoListItem todo={ todo } index={ 0 } 
            handleDelete={ handleDelete } handleToggle={ handleToggle }/> );

        const descOutput = screen.getByTestId("desc-output");

        expect( descOutput.classList.contains("completed") ).toBe( true );
    });
});