import useForm from "../../shared/hooks/useForm";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";


import TextField from "../../shared/components/TextField";

import { initialState } from "./initialState";
import { fields } from "./fields";//из ResgisterForma 
import Button from "shared/components/Button";
import useIsLogin from "shared/hooks/useLogin.js";

const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState });


    const isLogin = useIsLogin();
    if (isLogin) {
        return <Navigate to="/contacts" />;
    }

    const { name, email, password } = state;

    return (
        <form onSubmit={handleSubmit}>
            <TextField value={name} onChange={handleChange} {...fields.name} />
            <TextField value={email} onChange={handleChange} {...fields.email} />
            <TextField value={password} onChange={handleChange} {...fields.password} />
            <Button text="Register" type="submit">Register</Button>
        </form>
    )
}

RegisterForm.defaultProps = {
    onSubmit: () => { },
};

RegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
