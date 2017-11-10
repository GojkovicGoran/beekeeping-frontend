import React from "react";
import PropTypes from "prop-types";

const NewApiarySite = (props) => (
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

NewApiarySite.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default NewApiarySite;
