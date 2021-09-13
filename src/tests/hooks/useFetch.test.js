import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from '../../hooks/useFetch';

describe("Pruebas para useFetch", () => {

    test("Probando que se retorne el estado inicial", () => {

        const { result } = renderHook( () => useFetch("https://www.breakingbadapi.com/api/quotes/1"));
    
        const { data, loading, error } = result.current;

        expect( data ).toBe( null );
        expect( loading ).toBe( true );
        expect( error ).toBe( null );
    });

    test("Probando el estado despues de que termine la petición", async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetch("https://www.breakingbadapi.com/api/quotes/1") );

        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect( data.length ).toBe( 1 );
        expect( loading ).toBe( false );
        expect( error ).toBe( null );
    });

    test("Probando el estado en caso de error", async () => {

        const { result, waitForNextUpdate } = renderHook( () => useFetch("https://www.breakingbadapi.com/api/quot/") );

        await waitForNextUpdate();

        const { data, loading, error } = result.current;

        expect( data ).toBe( null );
        expect( loading ).toBe( false );
        expect( error ).toBe( true );
    });
});