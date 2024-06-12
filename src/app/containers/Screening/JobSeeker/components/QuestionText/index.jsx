import React from "react";


export const QuestionText = ({ questionNum, mandatory, question}) => {
    return (
        <div className={`question-text `}>
            <div>{`${questionNum}. `}</div>
            <div className={`${mandatory ? 'mandatory-question' : ''}`}>{question}</div>
        </div>
    )
};
