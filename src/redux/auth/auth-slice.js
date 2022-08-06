import {createSlice} from "@reduxjs/toolkit";

import { signup, login } from "./auth-operation";

import * as utils from '../../shared/services/utils.js';

const initialState = {
    user: {},//информация о полбзователья 
    token: "",//это уникальная строка для входа 
    isLogin: false, //залогинился человек или нет 
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [signup.pending]: utils.pending,
        [signup.fulfilled]: (store, {payload}) => {//пайлоад это ответ сервера запишется то есть юзер объект с данными и токен
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLogin = true;
        },
        [signup.rejected]: utils.rejected  ,
        [login.pending]: (store) => ({...store, loading: true, error: null}),
        [login.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLogin = true;
        },
        [login.rejected]: (store, {payload}) => ({...store, loading: false, error: payload}),
    }
});

export default authSlice.reducer;