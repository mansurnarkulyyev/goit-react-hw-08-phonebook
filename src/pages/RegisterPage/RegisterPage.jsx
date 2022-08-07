import RegisterForm from 'modules/RegisterForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import useIsLogin from 'shared/hooks/useLogin.js';
import { signupRequest } from '../../redux/auth/auth-operation.js';


function RegisterPage() {

    const isLogin = useIsLogin()
    const dispatch = useDispatch();
    const onSignup = (data) => {
        dispatch(signupRequest(data));
    }

    if (isLogin) {
        <Navigate to={"/contacts"} />
    }


    return (
        <main>
            <h1> Register page</h1>
            <RegisterForm onSubmit={onSignup} />
        </main>
    )
}

export default RegisterPage;
