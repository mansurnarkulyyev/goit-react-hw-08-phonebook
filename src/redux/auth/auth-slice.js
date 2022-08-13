import {createSlice} from "@reduxjs/toolkit";

import { signupRequest, loginRequest,getCurrent,logoutRequest } from "./auth-operation";

// import * as utils from '../../shared/services/utils.js';

const initialState = {
    user: {},//информация о полбзователья 
    token: "",//это уникальная строка для входа 
    isLogin: false, //залогинился человек или нет 
    loading: false,
    error: null,
};

// const pending = (store) => ({ ...store, loading: true, error: null });
// const rejected = (store, { payload }) => ({ ...store, loading: false, error: payload.message });

// const fulfilled = (store, { payload }) => ({
//       ...store,
//       loading: false,
//       token: payload.token,
//       isLogin: true,
//       user: payload.user,
//     });


const authSlice = createSlice({
    name: "contacts",
    initialState,
     extraReducers: {
        [signupRequest.pending]: (store) => ({...store, loading: true, error: null}),
        [signupRequest.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLogin = true;
        },
        [signupRequest.rejected]: (store, {payload}) => ({...store, loading: false, error: payload}),
        [loginRequest.pending]: (store) => ({...store, loading: true, error: null}),
        [loginRequest.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLogin = true;
        },
        [loginRequest.rejected]: (store, {payload}) => ({...store, loading: false, error: payload}),
        [logoutRequest.pending]: (store) => ({...store, loading: true, error: null}),
        [logoutRequest.fulfilled]: () => ({...initialState}),
        [logoutRequest.rejected]: (store, {payload}) => ({...store, loading: false, error: payload}),
        [getCurrent.pending]: (store) => ({...store, loading: true, error: null}),
        [getCurrent.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLogin = true;
        },
        [getCurrent.rejected]: (store, {payload}) => ({...store, loading: false, error: payload}),
    }
  });

export default authSlice.reducer;

