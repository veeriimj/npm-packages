import React from "react"
import Proptypes from "prop-types"
import './styles.scss';

export const TextArea = ({ value , handleChange, maxLength, placeholder, classes, error }) => {

    const onChange = ev => {
        const value = ev.target.value;
        handleChange(value);
    }

    return (
        <textarea  
            className={`text-area-container ${classes.join(' ')} ${error ? 'on-error' : ''}`}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            placeholder={placeholder}
        />
    );
};

TextArea.propTypes = {
    value: Proptypes.string,
    handleChange: Proptypes.func,
    maxLength: Proptypes.number,
    placeholder: Proptypes.string,
    classes: Proptypes.arrayOf(Proptypes.string),
};

