import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe("Pruebas en <LoginScreen />", () => {

    const user = {

        name: "Valerio",
        email: "test@mail.com"
    }

    test("Probando que se renderize correctamente", () => {

        const setUser = jest.fn();

        const component = render( 
            <UserContext.Provider value={ { setUser } }>
                <LoginScreen />
            </ UserContext.Provider>
        );

        expect( component.container ).toHaveTextContent( "LoginScreen" );
    });

    test("Debe de ejecutar setUser con el argumento esperado", () => {

        const setUser = jest.fn();

        const component = render( 
            <UserContext.Provider value={ { setUser } }>
                <LoginScreen />
            </ UserContext.Provider>
        );

        const loginBtn = screen.getByTestId("login-btn");

        fireEvent.click( loginBtn );

        expect( setUser ).toHaveBeenCalledWith({
            id:123,
            name:'Valerio',
            email:'email@mail.com'
        });

        screen.debug();
    });
});