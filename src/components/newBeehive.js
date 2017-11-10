import React from "react";
import PropTypes from "prop-types";

const NewBeehive = (props) => (
    <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={props.className}
    >
        {props.text}
    </input>
    )
;

NewBeehive.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default NewBeehive;
