import React from 'react';
import Button from 'shared/components/Button';
import { useSelector, useDispatch } from "react-redux";

import { getUser } from "../../redux/auth/auth-selector";

import { logoutRequest } from "../../redux/auth/auth-operation.js";
import st from "./userMenu.module.css";
function UserMenu() {
    const { name } = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logoutRequest());
    }
    return (
        <div className={st.user}>
            <p>{name}</p> |
            <Button text='Logout' type='button' onClick={onLogout} />
        </div>
    )
}

export default UserMenu;


