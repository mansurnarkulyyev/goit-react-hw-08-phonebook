import LoginRegister from 'modules/LoginRegister';
import UserMenu from 'modules/UserMenu';
import React from 'react';
import HeaderMenu from './HeaderMenu';
import st from './header.module.css';
import Logo from 'shared/components/Logo/Logo';
// import { useSelector } from 'react-redux';
// import { isLogin } from 'redux/auth/auth-selector';
import useIsLogin from 'shared/hooks/useLogin';

function Header() {

    const isLogin = useIsLogin();
    return (
        <header className={st.wrapper}>
            <Logo />
            <HeaderMenu isLogin={isLogin} />
            {isLogin ? <UserMenu /> : <LoginRegister />}


        </header>
    )
}

export default Header;
