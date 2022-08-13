import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getContacts,
  removeContacts,
  addContacts,
} from "../../shared/services/API/api.js";
// import * as api from "../../shared/services/API/api.js";


export const fetchContacts = createAsyncThunk(
  "contacts/fetch",
  async (_, { rejectWithValue }) => {
    try {
      return await getContacts();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeContact = createAsyncThunk(
  "contacts/remove",
  async (data, { rejectWithValue }) => {
    try {
      const result = await removeContacts(data);
            return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/add",
  async (data, { rejectWithValue }) => {
    try {
      return addContacts(data);
    } catch (error) {
     return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      const isDuplicate = contacts.items.find(
        (el) => el.name.toLowerCase() === data.name.toLowerCase()
      );
      if (isDuplicate) {
        alert(`"${isDuplicate.name}" is already in your contacts`);
        return false;
      }
    },
  }
);


