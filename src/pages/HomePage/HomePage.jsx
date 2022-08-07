import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <p>Please {" "}
                <Link to={"/login"}>
                    login
                </Link> or {" "}
                <Link to={"/register"}>
                    register
                </Link>{" "} to access your account and proceed with the operation!</p>
        </div>
    )
}

export default HomePage;
