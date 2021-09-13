import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);

    const newUser = {
        id:123,
        name:'Valerio',
        email:'email@mail.com'
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>

            <button data-testid="login-btn" className="btn btn-primary" onClick={ () => { setUser(newUser) } }>Login</button>
        </div>
    )
}
