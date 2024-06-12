import React from "react"
import PropTypes from 'prop-types';
import './styles.scss';
import { Radio } from "../Radio";

export const RadioGroup = ({ data }) => {
    return (
        <div className='radio-group-container'>
            {data.map(() => (
                <Radio />
            ))}
        </div>
    );
}

RadioGroup.propTypes = {
    data: PropTypes.array.isRequired
}