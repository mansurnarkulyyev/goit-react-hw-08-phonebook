import useForm from "../../shared/hooks/useForm";

import TextField from "../../shared/components/TextField";

import { initialState } from "./initialState";
import { fields } from "./fields";//из ResgisterForma 
import Button from "shared/components/Button";

const RegisterForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState });

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

export default RegisterForm;