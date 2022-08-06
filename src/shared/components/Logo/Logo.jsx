import React from 'react';
import { Link } from 'react-router-dom';
import st from './logo.module.css';


function Logo() {
    return (
        <Link className={st.logo} to='/contacts'>Logo</Link>
    )
}

export default Logo;
