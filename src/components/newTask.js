import React from "react";
import PropTypes from "prop-types";

const NewTask = (props) => (
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

NewTask.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default NewTask;
