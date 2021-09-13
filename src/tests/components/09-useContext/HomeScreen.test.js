import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe("Pruebas en <HomeScreen />", () => {

    test("Probando que se renderize correctamente", () => {

        const user = {

            name: "Valerio",
            email: "test@mail.com"
        }
    
        const setUser = () => {
    
            return user;
        }

        const component = render( 
            <UserContext.Provider value={ { user, setUser } }>
                <HomeScreen />
            </UserContext.Provider> 
        );

        expect( component.container ).toHaveTextContent( "HomeScreen" );
        
        screen.debug();
    });
});