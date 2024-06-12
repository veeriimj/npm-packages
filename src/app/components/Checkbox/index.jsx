import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export const Checkbox = props => {
    return (
        <div className={`checkbox ${props.theme}`}>
            <input
                // onClick={props.onClick}
                onChange={props.onClick}
                type="checkbox"
                checked={props.checked}
                id={props.id}
                name={props.name}
                {...props.inputProps}
            />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
};

Checkbox.propTypes = {
    checked: PropTypes.bool,
    label: PropTypes.string,
    inputProps: PropTypes.objectOf(PropTypes.any),
    id: PropTypes.string,
    onClick: PropTypes.func,
    classes: PropTypes.arrayOf(PropTypes.string),
};
