import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe("Pruebas en MultipleCustomHooks", () => {

    beforeEach( () => {
        
        useCounter.mockReturnValue({
            counter: 10
        });
    });

    test("Probando que se renderize correctamente con su estado inicial", () => {

        useFetch.mockReturnValue( { data: null, loading: true, error: null } );

        render( <MultipleCustomHooks /> );

        const loadingOutput = screen.getByTestId("loading-output");

        expect( loadingOutput ).toBeInTheDocument();

    });

    test("Probando que se muestre el quote y el author correctamente", () => {

        useFetch.mockReturnValue( { 
            data:[ {author: "Valerio", quote: "Hola mundo"} ],
            loading: false,
            error: null
        } );

        const component = render( <MultipleCustomHooks /> );
        
        const { authorOutput, quoteOutput } = {

            authorOutput: screen.getByTestId("author-output"),
            quoteOutput: screen.getByTestId("quote-output")
        }

        expect( component.container ).not.toHaveTextContent("Loading...");
        expect( authorOutput ).toHaveTextContent( "Valerio" );
        expect( quoteOutput ).toHaveTextContent( "Hola mundo" );
    });
});