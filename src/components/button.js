import React from "react";
import PropTypes from "prop-types";

const Button = (props) => (
    <button
        type="button"
        onClick={props.onClick}
        className={props.className}
    >
        {props.text}
    </button>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Button;
