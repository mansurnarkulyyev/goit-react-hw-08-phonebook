import { combineReducers } from "@reduxjs/toolkit";

import contactsReduce from "./contacts/contacts-slice";

import authReducer from "./auth/auth-slice.js";

const rootReducer = combineReducers({
  contacts: contactsReduce,
  auth:authReducer, 
});

export default rootReducer;
