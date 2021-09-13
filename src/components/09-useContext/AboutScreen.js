import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const AboutScreen = () => {

    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h1>AboutScreen</h1>
            <hr/>

            <button className="btn btn-primary" onClick={ () => { setUser({}) }}>Log out</button>

            <pre>
                { JSON.stringify(user, null, 3) }
            </pre>
        </div>
    )
}
