import useForm from "../../shared/hooks/useForm";

import TextField from "../../shared/components/TextField";

import { initialState } from "./initialState";
import { fields } from "./fields";
import Button from "shared/components/Button";

const LoginForm = ({ onSubmit }) => {
    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState });

    const { email, password } = state;

    return (
        <form onSubmit={handleSubmit}>
            <TextField value={email} onChange={handleChange} {...fields.email} />
            <TextField value={password} onChange={handleChange} {...fields.password} />
            <Button text="Login" type="submit">Login</Button>
        </form>
    )
}

export default LoginForm;