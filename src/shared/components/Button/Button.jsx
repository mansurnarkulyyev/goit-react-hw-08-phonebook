import React from 'react';
import PropTypes from "prop-types";


function Button({ text, type, onClick }) {
    return (
        <button type={type} onClick={onClick}>
            {text}
        </button>
    )
}


Button.defaultProps = {
    type: 'button',
    onClick: () => { },
    text: 'some text LOREM',
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;
