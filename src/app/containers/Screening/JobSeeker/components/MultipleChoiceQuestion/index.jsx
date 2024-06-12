import React from "react";
import { Checkbox } from "../../../../../components/Checkbox";
import { QuestionText } from "../QuestionText";

export const MultiAnswerQuestion = ({ id, question, answerOptions, handleChange, questionNum, mandatory, value, error }) => {
    const handleClick = (ev) => {
        handleChange(+ev.target.name, questionNum);
    }

    return (
        <div className='multi-answer-question-container' id={id}>
            <QuestionText questionNum={questionNum} mandatory={mandatory} question={question} />
            <div className='answer-options'>
                { answerOptions.map((option, index) => (
                    <Checkbox
                        checked={Array.isArray(value) && value.includes(index)}
                        label={option}
                        id={`${id}-op-${index+1}`}
                        key={`${id}-op-${index+1}`}
                        onClick={handleClick}
                        theme='green'
                        value={index}
                        name={index}
                    />
                ))}
            </div>
            {mandatory && error &&
                <div className='validation-error'>
                    This is a mandatory question
                </div>
            }
        </div>
    );
};