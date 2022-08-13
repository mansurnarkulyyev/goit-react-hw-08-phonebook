import PropTypes from 'prop-types';
import { memo } from 'react';
import SmallButton from 'shared/components/SmallButton';

const ContactsItem = ({ id, name, number, onClick }) => {
  // console.log(phone);
  return (
    <li>
      {name}: {number}
      <SmallButton
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
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default memo(ContactsItem);
