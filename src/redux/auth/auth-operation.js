import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/api/auth-api.js";

export const signup = createAsyncThunk(
    "auth/signup",
    async(data, {rejectWithValue}) => {//в дате попадает то что ввели в поле ввода имя меил и пороль
        try {
            const result = await api.signup(data);
            // console.log(result);
            return result;//если учпешно то возврашаем 
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.login(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)