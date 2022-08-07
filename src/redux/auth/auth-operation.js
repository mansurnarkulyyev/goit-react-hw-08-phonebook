import { createAsyncThunk } from "@reduxjs/toolkit";


import * as api from "../../shared/api/auth-api.js";


export const signupRequest = createAsyncThunk(
    "auth/signup",
    async(data, {rejectWithValue}) => {//в дате попадает то что ввели в поле ввода имя меил и пороль
        try {
            const result = await api.signup(data);
            return result;//если учпешно то возврашаем 
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const loginRequest = createAsyncThunk(
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


export const logoutRequest = createAsyncThunk(
    "auth/logout",
    async(_, {rejectWithValue}) => {
        try {
            const result = await api.logout();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const getCurrent = createAsyncThunk(
    "auth/current",
    async(_, {rejectWithValue, getState}) => {
        try {
            const { auth } = getState();
            // debugger
            const result = await api.getCurrent(auth.token);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    {
        condition: (_, {getState}) => {
            const {auth} = getState();
            if(!auth.token) {
                return false;
            }
        }
    }
)