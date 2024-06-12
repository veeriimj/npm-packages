import React from 'react';
import { MultiAnswerQuestion } from '../MultipleChoiceQuestion';
import { SingleAnswerQuestion } from '../SingleChoiceQuestion';
import { YesNoQuestion } from '../YesNoQuestion';
import { ShortAnswerQuestion } from '../ShortAnswerQuestion';
import { LongAnswerQuestion } from '../LongAnswerQuestion';
import './styles.scss';

const questionTypeMap = {
    1: 'Multi',
    2: 'Single',
    3: 'Yes/No',
    4: 'Short',
    5: 'Long',
}

export const Question = ({ question, questionNum, handleChange, value, error }) => {

    return (
        <div className='screening-question-container'>
            {questionTypeMap[question.type] === 'Multi' ? (
                <MultiAnswerQuestion 
                    id={question._id}
                    question={question.question}
                    answerOptions={question.answerOptions}
                    questionNum={questionNum}
                    mandatory={question.mandatory}
                    value={value}
                    handleChange={handleChange}
                    error={error}
                />
            ) : 
            questionTypeMap[question.type] === 'Single' ? (
                <SingleAnswerQuestion
                    id={question._id}
                    question={question.question}
                    answerOptions={question.answerOptions}
                    questionNum={questionNum}
                    mandatory={question.mandatory}
                    value={value}
                    handleChange={handleChange}
                    error={error}
                />
            )
            :
            questionTypeMap[question.type] === 'Yes/No' ? (
                <YesNoQuestion
                    id={question._id}
                    question={question.question}
                    questionNum={questionNum}
                    mandatory={question.mandatory}
                    value={value}
                    handleChange={handleChange}
                    error={error}
                />
            )
            :
            questionTypeMap[question.type] === 'Short' ? (
                <ShortAnswerQuestion
                    id={question._id}
                    question={question.question}
                    questionNum={questionNum}
                    mandatory={question.mandatory}
                    value={value}
                    handleChange={handleChange}
                    error={error}
                />
            )
            :
            questionTypeMap[question.type] === 'Long' ? (
                <LongAnswerQuestion
                    id={question._id}
                    question={question.question}
                    questionNum={questionNum}
                    mandatory={question.mandatory}
                    value={value}
                    handleChange={handleChange}
                    error={error}
                />
            ):
            null
            }
        </div>  
    );
}