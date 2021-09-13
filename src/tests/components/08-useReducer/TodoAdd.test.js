import { render } from "@testing-library/react";
import { fireEvent, screen } from "@testing-library/dom";
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe("Pruebas en <TodoAdd />", () => {

    const handleAdd = jest.fn();

    test("Probando que se renderize correctamente", () => {

        const component = render( <TodoAdd handleAdd={ handleAdd }/> );

        const form = component.container.querySelector("form");

        expect( form ).toBeInTheDocument();

    });

    test("Probando que no se llame a handleAdd", () => {

        const component = render(<TodoAdd handleAdd={ handleAdd }/>);

        const sendBtn = screen.getByTestId("send-btn");

        fireEvent.click(sendBtn);

        expect( handleAdd ).not.toHaveBeenCalled();

    });

    test("Probando que se llamo handleAdd", () => {

        const component = render(<TodoAdd handleAdd={ handleAdd }/>);

        const input = screen.getByTestId("user-input");
        const sendBtn = screen.getByTestId("send-btn");

        fireEvent.change(input, { target: {value: "description", name:"description"} });

        fireEvent.click(sendBtn);

        expect( handleAdd ).toHaveBeenCalledWith({ id: expect.any( Number ), desc: "description", done: false });
        
        expect( input.value ).toBe("");

    });
});