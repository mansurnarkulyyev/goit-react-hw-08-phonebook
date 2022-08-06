import { useDispatch } from "react-redux";
import React from 'react';

import { login } from '../../redux/auth/auth-operation.js';

import LoginForm from "../../modules/LoginForm/LoginForm";

const LoginPage = () => {
    const dispatch = useDispatch();

    const onLogin = (data) => {
        // console.log(data);
        dispatch(login(data));
    }

    return (
        <main>
            <div className="container">
                <h2>Login Page</h2>
                <LoginForm onSubmit={onLogin} />
            </div>
        </main>
    )
}

export default LoginPage;



