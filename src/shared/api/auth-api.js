import axios from "axios";

export const instance = axios.create({
    baseURL:'https://connections-api.herokuapp.com'
})

const setToken = (token = "") => {
    // if (token) {
     instance.defaults.headers.authorization = `Bearer ${token}`;
    // }

    // instance.defaults.headers.authorization = ' ';
}

export const signup = async (data) => {
    const { data: result } = await instance.post("/users/signup", data);
    // console.log(result);
    setToken(result.token);
    return result;
}

export const login = async (data) => {
    const { data: result } = await instance.post("/users/login", data);
    // console.log(result );
    setToken(result.token);
    return result;
}
















