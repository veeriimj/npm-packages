import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import './styles.scss';

export const Tooltip = props => {
    const options = {
        className: ['tooltip', props.className || ''].join(' '),
        classNameArrow: 'tooltip-arrow',
        effect: 'solid',
        place: 'top-start',
        variant: 'info',
        // offset: 100,
        // backgroundColor: '#efefef',
        // textColor: '#333',
        // fontFamily: 'Poppins',
        // borderRadius: '12.68px',
        // backgroundColor: '#CBD5E1',
        backgroundColor: '#efefef',
        textColor: '#2b2b2b',
        multiline: true,
        ...props.options,
        id: props.id,
    };
    if (props.getContent) {
        options.getContent = props.getContent;
    }
    return <ReactTooltip {...options} />;
};

Tooltip.propTypes = {
    id: PropTypes.string.isRequired,
    options: PropTypes.objectOf(PropTypes.string),
};
