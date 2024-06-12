import React from "react";
import { Radio } from "../../../../../components/Radio";
import { QuestionText } from "../QuestionText";

export const SingleAnswerQuestion = ({ id, question, answerOptions, handleChange, questionNum, mandatory, value, error }) => {

    const onChange = (ev) => {
        handleChange(+ev.target.value, questionNum);
    }

    return (
        <div className='single-answer-question-container' id={id}>
            <QuestionText questionNum={questionNum} mandatory={mandatory} question={question} />
            <div className='answer-options'>
                { answerOptions.map((option, index) => (
                    <Radio 
                        checked={value===index}
                        id={`${id}-op-${index+1}`}
                        key={`${id}-op-${index+1}`}
                        handleChange={onChange}
                        label={option}
                        value={index}
                        name={id}
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