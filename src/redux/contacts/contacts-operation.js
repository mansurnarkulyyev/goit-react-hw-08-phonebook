import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getContacts,
  removeContacts,
  addContacts,
} from "../../shared/services/API/api.js";

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

export const addContact = createAsyncThunk(
  "contacts/add",
  async (data, { rejectWithValue }) => {
    try {
      return addContacts(data);
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({data, status});
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

export const removeContact = createAsyncThunk(
  "contacts/remove",
  async (data, { rejectWithValue }) => {
    try {
      return await removeContacts(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
