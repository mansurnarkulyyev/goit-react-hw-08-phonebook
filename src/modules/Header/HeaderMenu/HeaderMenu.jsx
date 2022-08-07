import { items } from './items.js';
import React from 'react';
import { NavLink } from 'react-router-dom';
import st from './headerMenu.module.css';

function getClassName({ isActive }) {
    const className = isActive ? st.isActive : st.link;
    return className;
}


function HeaderMenu({ isLogin }) {
    const selectItems = isLogin ? items : items.filter(item => !item.private)
    const elements = selectItems.map(({ id, to, name }) =>
        <li key={id} className={st.item}>
            <NavLink className={getClassName} to={to}>
                {name}
            </NavLink></li>)

    return (
        <nav className={st.wrapper}>
            <ul className={st.list}>
                {elements}
            </ul>
        </nav>
    )
}

export default HeaderMenu;
