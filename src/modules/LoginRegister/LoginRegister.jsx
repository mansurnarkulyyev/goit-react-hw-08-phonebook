import React from 'react';
import { NavLink } from 'react-router-dom';
import st from './loginRegister.module.css';

const getClassName = ({ isActive }) => {
    return isActive ? `${st.isActive} ${st.link}` : st.link;
}


function LoginRegister() {
    return (
        <div className={st.wrapper}>
            <p><NavLink className={getClassName} to={'/login'}>Login</NavLink></p>

            <p><NavLink className={getClassName} to={'/register'}>Register</NavLink></p>
        </div>
    )
}

export default LoginRegister;
