import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe("Pruebas en useCounter", () => {

    test("Debe de retonar valores por defecto", () => {

        const { result } = renderHook( () => useCounter() );

        const { counter, increment, decrement, reset } = result.current;

        expect( counter ).toBe(10);
        expect( typeof increment ).toBe('function');
        expect( typeof decrement ).toBe('function');
        expect( typeof reset ).toBe('function');
        
    });

    test("El contador retornado debe de ser igual al argumento dado", () => {

        const arg = 100;

        const { result } = renderHook( () => useCounter( arg ) );

        const { counter } = result.current;

        expect( counter ).toBe( arg );
    });

    test("Probando la función de incremento retornada", () => {

        const arg = 100;

        const { result } = renderHook( () => useCounter(arg) );

        const { increment } = result.current;

        act( () => {

            increment();

        });

        const { counter } = result.current;

        expect( counter ).toBe( arg + 1 );
    });

    test("Probando la función de decremento retornada", () => {

        const arg = 100;

        const { result } = renderHook( () => useCounter(arg) );

        const { decrement } = result.current;

        act( () => {
            decrement();
        } );

        const { counter } = result.current;

        expect( counter ).toBe( arg - 1 );
    });

    test("Probando la función reset retornada", () => {

        const arg = 100;

        const { result } = renderHook( () => useCounter( arg ) );

        const { reset, increment } = result.current;

        act( () => {

            increment();
            reset();
        });

        const { counter } = result.current;

        expect( counter ).toBe( arg );

        
    });
});