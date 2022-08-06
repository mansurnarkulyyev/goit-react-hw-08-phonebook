import { items } from './items.js';
import React from 'react';
import { NavLink } from 'react-router-dom';
import st from './headerMenu.module.css';

function getClassName({ isActive }) {
    const className = isActive ? st.isActive : st.link;
    return className;
}


function HeaderMenu() {

    const elements = items.map(item => <li key={item.id} className={st.item}>
        <NavLink className={getClassName} to={item.link}>
            {item.name}
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
