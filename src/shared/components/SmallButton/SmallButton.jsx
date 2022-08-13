import React from 'react';
import PropTypes from "prop-types";
import st from './small-button.module.css';


function SmallButton({ text, type, onClick }) {
    return (
        <button className={st.SmallButton} type={type} onClick={onClick}>
            {text}
        </button>
    )
}


SmallButton.defaultProps = {
    type: 'button',
    onClick: () => { },
    text: 'some text LOREM',
}

SmallButton.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default SmallButton;
