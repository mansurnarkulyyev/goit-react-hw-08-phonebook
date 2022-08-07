import { memo } from 'react';
import PropTypes from "prop-types";
import Button from 'shared/components/Button';
import TextField from 'shared/components/TextField';
import useForm from 'shared/hooks/useForm';
import { fields } from './fields';
import { initialState } from "./initialState";


const FormNewContact = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });
  const { name, number } = state;

  return (
    <form onSubmit={handleSubmit} >
      <TextField value={name} onChange={handleChange} {...fields.name} />
      <TextField value={number} onChange={handleChange} {...fields.number} />
      <Button text="Add contact" />
    </form>
  );
};

FormNewContact.defaultProps = {
  onSubmit: () => { },
};


FormNewContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default memo(FormNewContact);