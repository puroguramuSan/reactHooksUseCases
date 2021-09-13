import { render } from "@testing-library/react";
import { screen, fireEvent } from "@testing-library/dom";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";

describe("Pruebas en <TodoApp />", () => {

    test("Probando que se renderize correctamente", () => {

        const component = render( <TodoApp /> );

        const div = component.container.querySelector("div");

        expect( div ).toBeInTheDocument();
    });

    test("Debe agregar un todo", () => {

        const component = render( <TodoApp /> );

        const sendBtn = screen.getByTestId("send-btn");
        const input = screen.getByTestId("user-input");

        const output = screen.getByTestId("todos-output");

        fireEvent.change( input, { target: { value: "description", name: "description"} } );
        fireEvent.click( sendBtn );

        expect( output ).toHaveTextContent("TodoApp ( 1 )");
    });
});