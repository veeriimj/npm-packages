import React from "react";
import { TextArea } from "../../../../../components/TextArea";
import { QuestionText } from "../QuestionText";

export const ShortAnswerQuestion = ( { id, question, questionNum, mandatory, value, handleChange, error }) => {
    const onChange = (val) => {
        handleChange(val, questionNum)
    }

    return (
        <div className='short-answer-question-container' id={id}>
            <QuestionText questionNum={questionNum} mandatory={mandatory} question={question} />
            <TextArea 
                classes={['short-answer-text-area']}
                value={value}
                handleChange={onChange}
                maxLength={500}
                placeholder="Enter your answer"
                error={error}
            />
            {mandatory && error &&
                <div className='validation-error'>
                    This is a mandatory question
                </div>
            }
            <div className='remaining-character'>{500-value.length} characters left</div>
        </div>
    );
};