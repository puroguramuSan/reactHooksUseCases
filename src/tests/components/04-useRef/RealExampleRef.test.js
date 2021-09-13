import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';

describe( "Pruebas en RealExampleRef", () => {

    test("Debe mostrarse correctamente con su estado inical", () => {

        const component = render( <RealExampleRef /> );

        const childComponent = component.container.getElementsByTagName("MultipleCustomHooks");
        
        expect( childComponent.length ).toBe( 0 );
    });

    test("Probando que se muestre el componente hijo cuando se haga click en el botón con testid show-btn", () => {

        const component = render( <RealExampleRef /> );

        const showBtn = screen.getByTestId("show-btn");

        userEvent.click( showBtn );

        const loadingOutput = screen.getByTestId("loading-output");

        component.debug();

        expect( loadingOutput ).toBeInTheDocument();
        
    });
} );