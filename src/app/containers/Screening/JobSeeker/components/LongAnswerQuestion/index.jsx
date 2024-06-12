import React from "react";
import { TextArea } from "../../../../../components/TextArea";
import { QuestionText } from "../QuestionText";

export const LongAnswerQuestion = ( { id, question, questionNum, mandatory, handleChange, value, error }) => {
    const onChange = (val) => {
        handleChange(val, questionNum)
    }

    return (
        <div className='long-answer-question-container' id={id}>
            <QuestionText questionNum={questionNum} mandatory={mandatory} question={question} />
            <TextArea 
                classes={['long-answer-text-area']}
                value={value}
                handleChange={onChange}
                maxLength={2000}
                placeholder="Enter your answer"
                error={error}
            />
            {mandatory && error &&
                <div className='validation-error'>
                    This is a mandatory question
                </div>
            }
            <div className='remaining-character'>{2000-value.length} characters left</div>
        </div>
    );
};