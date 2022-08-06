import LoginRegister from 'modules/LoginRegister';
import UserMenu from 'modules/UserMenu';
import React from 'react';
import HeaderMenu from './HeaderMenu';
import st from './header.module.css';
import Logo from 'shared/components/Logo/Logo';

function Header() {

    const isLogin = false;
    return (
        <header className={st.wrapper}>
            <Logo />
            <HeaderMenu />
            {isLogin ? <UserMenu /> : <LoginRegister />}


        </header>
    )
}

export default Header;
