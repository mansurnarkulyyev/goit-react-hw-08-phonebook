
import  instance  from "shared/api/auth-api.js";

export const getContacts = async () => {
  const { data } = await instance.get("/contacts");
  return data;
}; 

export const removeContacts = async (id) => {
  const { data } = await instance.delete(`/contacts/${id}`);
    return data;
};

export const addContacts = async (data) => {
  const { data: result } = await instance.post("/contacts", data);
  return result;
};





