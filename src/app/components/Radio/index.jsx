import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export const Radio = ({ id, name, checked, handleChange, label, value }) => {

    return (
        <div className='radio-container'>
            <input 
                type='radio'
                checked={checked}
                id={id}
                name={name}
                value={value}
                onChange={handleChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

Radio.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    checked: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.any
};

