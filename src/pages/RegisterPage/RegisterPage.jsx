import RegisterForm from 'modules/RegisterForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operation.js';


function RegisterPage() {
    const dispatch = useDispatch();
    // console.log(signup);
    const onSignup = (data) => {
        // console.log(data);
        dispatch(signup(data));
    }

    return (
        <main>
            <h1> Register page</h1>
            <RegisterForm onSubmit={onSignup} />
        </main>
    )
}

export default RegisterPage;
