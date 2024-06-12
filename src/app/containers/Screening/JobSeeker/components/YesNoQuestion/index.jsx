import React from "react";
import { Radio } from "../../../../../components/Radio";
import { QuestionText } from "../QuestionText";

export const YesNoQuestion = ( { id , question, questionNum, mandatory, handleChange, value, error }) => {
    const onChange = (ev) => {
        handleChange(+ev.target.value, questionNum);
    }
    return (
        <div className='yes-no-answer-question-container' id={id}>
            <QuestionText questionNum={questionNum} mandatory={mandatory} question={question} />
            <div className='answer-options'>
                <Radio
                    checked={value===0}
                    label='Yes'
                    id={`${id}-op-yes`}
                    name={id}
                    value={0}
                    handleChange={onChange}
                />
                <Radio
                    checked={value===1}
                    label='No'
                    id={`${id}-op-$No`}
                    name={id}
                    value={1}
                    handleChange={onChange}
                />
            </div>
            {mandatory && error &&
                <div className='validation-error'>
                    This is a mandatory question
                </div>
            }
        </div>
    );
};