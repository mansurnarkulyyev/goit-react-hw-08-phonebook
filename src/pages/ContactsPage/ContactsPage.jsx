import { useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";

import {
    fetchContacts,
    removeContact,
    addContact,
} from "../../redux/contacts/contacts-operation";
import { getContacts } from "../../redux/contacts/contacts-selector";
import { useDispatch } from "react-redux";

import ContactsList from "../../modules/BookContacts/ContactsList/ContactsList";
import FormNewContact from "../../modules/BookContacts/FormNewContact/FormNewContact";
import SearchContact from "../../modules/BookContacts/SearchContact/SearchContact";

// import "./index.css";

const ContactsPage = () => {
    const [filter, setFilter] = useState("");
    const dispatch = useDispatch();

    const contactsStore = useSelector(getContacts);
    const { items, error, loading } = contactsStore;
    const filteredItems = () => {
        if (!filter) {
            return items;
        }
        const newItems = items.filter((e) => {
            const { name } = e;
            return name.toLowerCase().includes(filter.toLowerCase());
        });
        return newItems;
    };

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const onAddContact = useCallback(
        (obj) => dispatch(addContact(obj)),
        [dispatch]
    );

    const onRemoveContact = useCallback(
        (id) => {
            dispatch(removeContact(id));
        },
        [dispatch]
    );

    const changeFilterState = useCallback(
        ({ target: { value } }) => setFilter(value.trim()),
        [setFilter]
    );

    return (
        <div className="container">
            <h1 className="title">Phonebook</h1>
            <FormNewContact onSubmit={onAddContact} />

            <h2 className="title">Contacts</h2>
            <SearchContact onChange={changeFilterState} />
            {loading && <p>Loading...</p>}
            {error && <p>{`Error: ${error}`}</p>}
            {items.length > 0 && !error && !loading && (
                <ContactsList items={filteredItems()} onClick={onRemoveContact} />
            )}
        </div>
    );
};

export default ContactsPage;

