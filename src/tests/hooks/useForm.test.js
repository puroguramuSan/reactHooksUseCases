import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe("Pruebas en useForm", () => {

    const initialState = {
        name: "Valerio",
        email: "test@mail.com"
    }

    test("Probando el retorno del estado inicial", () => {

        const { result } = renderHook( () => useForm(initialState) );

        const [ values, handleInputChange, reset ] = result.current;

        expect( initialState ).toEqual( values );
        expect( typeof handleInputChange ).toBe( "function" );
        expect( typeof reset).toBe( "function" );
    });

    test("Probando que handleInputChange cambie los values", () => {

        const { result } = renderHook( () => useForm(initialState) );

        const [ , handleInputChange ] = result.current;

        act( () => {
            handleInputChange({
                target:{
                    name: "name",
                    value:"Nuevo Valor"
                }
            });
        });

        let [ values ] = result.current;

        expect( values ).toEqual({ ...values, name:"Nuevo Valor" });
    });

    test("Probando la función reset", () => {
        const { result } = renderHook( () => useForm( initialState ) );

        const [ ,handleInputChange, reset ] = result.current;

        act( () => {
            handleInputChange({
                target: {
                    name: "name",
                    values: "Nuevo Valor"
                }
            });

            reset();
        });

        const [ values ] = result.current;

        expect( values ).toEqual( initialState );
    });
});