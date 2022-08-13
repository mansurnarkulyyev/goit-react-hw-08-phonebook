import { memo } from 'react';
import PropTypes from "prop-types";
import TextField from 'shared/components/TextField';
import useForm from 'shared/hooks/useForm';
import { fields } from './fields';
import { initialState } from "./initialState";
import SmallButton from 'shared/components/SmallButton';


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
      <SmallButton type="submit" text="Add contact" />
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