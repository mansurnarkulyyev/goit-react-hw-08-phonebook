import PropTypes from 'prop-types';
import { memo } from 'react';
import Button from 'shared/components/Button';

const ContactsItem = ({ id, name, number, onClick }) => {
  // console.log(phone);
  return (
    <li>
      {name}: {number}
      <Button
        text="Delete"
        type="button"
        onClick={(e) => {
          onClick(id);
        }} />
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default memo(ContactsItem);
