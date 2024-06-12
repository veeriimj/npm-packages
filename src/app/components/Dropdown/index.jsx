import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

export const Dropdown = ({ options, handleChange, defaultValue, classes, selectClassName }) => {

  return (
    <div className={`dropdown-container ${classes.join(' ')}`}>
      <select
        className={`dropdown-select ${selectClassName}`}
        onChange={handleChange}
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  className: PropTypes.arrayOf(PropTypes.string),
  selectClassName: PropTypes.string,
};


Dropdown.defaultProps = {
    disabled: false,
    options: [],
    classes: [],
    selectClassName: ''
};