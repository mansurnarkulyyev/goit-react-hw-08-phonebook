import { useDispatch } from "react-redux";
import React from 'react';

import { loginRequest } from '../../redux/auth/auth-operation.js';

import LoginForm from "../../modules/LoginForm/LoginForm";
import useIsLogin from "shared/hooks/useLogin.js";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
    const isLogin = useIsLogin()
    const dispatch = useDispatch();
    const onLogin = (data) => {
        dispatch(loginRequest(data));
    }

    if (isLogin) {
        <Navigate to={"/contacts"} />
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



