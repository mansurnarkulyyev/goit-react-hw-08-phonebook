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

const pending = (store) => ({ ...store, loading: true, error: null });
const rejected = (store, { payload }) => ({ ...store, loading: false, error: payload.message });

const fulfilled = (store, { payload }) => ({
      ...store,
      loading: false,
      token: payload.token,
      isLogin: true,
      user: payload.user,
    });


const authSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: {
        [signupRequest.pending]: pending,
        [signupRequest.fulfilled]: fulfilled,
        [signupRequest.rejected]: rejected ,
        [loginRequest.pending]: pending,
        [loginRequest.fulfilled]: fulfilled,
        [loginRequest.rejected]:rejected,
  },
    [logoutRequest.pending]: pending,
    [logoutRequest.rejected]: rejected,
    [logoutRequest.fulfilled]: () => ({...initialState}),

    [getCurrent.pending]: pending,
    [getCurrent.rejected]: () => ({...initialState}),
    [getCurrent.fulfilled]: (store, { payload }) => {
      if (payload.token) {
        return {
          ...store,
          loading: false,
          isLogin: true,
          user: payload.user,
          token: payload.token
        };
      }
      return {
        ...store,
        loading: false,
        isLogin: true,
        user: payload,
      };
    },
  });

export default authSlice.reducer;