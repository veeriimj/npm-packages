import React from "react";
import PropTypes from "prop-types";
import './styles.scss';

export const Button = ({ onClick, children, loading, disabled, type, classes, name, theme, dataTestid, dataTooltip }) => {
    const handleClick = () => {
        if (!loading && !disabled && onClick) {
            onClick();
        }
    };
    const btnClass = `a-button ${loading ? 'loading' : ''} ${type
        } ${theme} ${(classes || []).join(' ')}`;

    return (
        <button
            className={btnClass}
            onClick={handleClick}
            disabled={disabled || loading}
            type={type}
            data-testid={dataTestid}
            name={name}
            title={dataTooltip}
        >
            {loading ? "Loading..." : children}
        </button>
    );
};

Button.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    dataTooltip: PropTypes.string,
    // type: PropTypes.oneOf(["button", "submit", "reset"]),
};

