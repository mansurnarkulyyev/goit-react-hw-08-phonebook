import { createSlice } from "@reduxjs/toolkit";

import {fetchContacts, addContact, removeContact} from "./contacts-operation";

const initialState = {
    items: [],
    loading: false,
    error: null
};

const pending = (store) => ({ ...store, loading: true, error: null });
const rejected = (store, { payload }) => ({ ...store, loading: false, error: payload.message });

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: {
        [fetchContacts.pending]: pending,
        [fetchContacts.rejected]: rejected,
        [fetchContacts.fulfilled]: (store, {payload}) => {
            store.items = payload;
            store.loading = false;
        },
        [addContact.pending]: pending,
        [addContact.rejected]: rejected,
        [addContact.fulfilled]: (store, {payload}) => {
            store.items.push(payload);
            store.loading = false;
        },
        [removeContact.pending]: pending,
        [removeContact.rejected]: rejected,
        [removeContact.fulfilled]: (store, {payload}) => {
            store.items = store.items.filter(item => item.id !== payload);
            store.loading = false;
        },
    }
});

export default contactsSlice.reducer;