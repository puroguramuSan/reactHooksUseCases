import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { todos as demoTodos } from '../../fixtures/demoTodos';

const handleDelete = jest.fn();
const handleToggle = jest.fn();

describe("Pruebas en <TodoList />", () => {

    test("Probando que el componente se renderize correctamente", () => {

        const component = render(<TodoList todos={demoTodos}
                                    handleDelete={handleDelete}
                                    handleToggle={handleToggle} />);

        const list = component.container.querySelector("ul");

        expect( list ).toBeInTheDocument();


    });

    test("Probando que demoTodos y <TodoListItem /> tengan la misma longitud", () => {

        const component = render(<TodoList todos={demoTodos}
            handleDelete={handleDelete}
            handleToggle={handleToggle} />);

        const listItems = component.container.querySelectorAll("li");
        
        expect( listItems.length ).toBe( demoTodos.length );
    });
});