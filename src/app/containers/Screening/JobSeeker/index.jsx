import React, { useEffect, useState } from 'react';
import { Question } from './components/Question';
import { Button } from '../../../components/Button';
import { Tooltip } from '../../../components/Tooltip';
import { getQuestionnaire } from '../../../../services/questionnaire/getQuestionnaire';

import './styles.scss';
import { addQuestionResponse } from '../../../../services/questionResponse/addQuestionResponse';

export const ScreeningJobSeeker = ({ seekerId, associationPublished, submitCallback }) => {
    const INVOCATION = 1;

    const [questionnaire, setQuestionnaire] = useState({});
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        fetchQuestionaire();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);  
    
    
    const fetchQuestionaire = async () => {
        const params = {
            associationPublished: associationPublished,
            invocation: INVOCATION, 
            seeker: seekerId,
        }

        const resp = await getQuestionnaire(seekerId, params);
        const questionsData = resp.data.data[0].sections[0].questions;
        setQuestions(questionsData);
        setQuestionnaire(resp.data.data[0]);
        const newAnswers = [];

        for (const question of questionsData) {
            const ans = question.answer || (question.type === 1 ? [] : '');
            newAnswers.push(ans);
        }

        setAnswers(newAnswers);
    };

    const handleError = () => {
        window.alert('Something Went Wrong');
    }

    const handleChange = (ans, questionNo) => {
        let newAnswers = [...answers];
        if (questions[questionNo-1].type === 1) {
            if (newAnswers[questionNo-1].includes(ans)) {
                newAnswers[questionNo-1] = newAnswers[questionNo-1].filter((val) => val !== ans)
            } else {
                newAnswers[questionNo-1].push(ans);
            }

        } else {
            newAnswers[questionNo-1] = ans;
        }
        setAnswers(newAnswers);

    }

    const handleSubmit = async () => {
        try {
            if (validate()) {
                const data = formatAnswerData();
                console.log(data);
                await addQuestionResponse(seekerId, data);
                submitCallback();
            }
        } catch (error) {
            console.log(error);
            handleError();
        }
    }


    const validate = () => {
        const newErrors = [];
        let flag = true;
        for (let i = 0; i < questions.length; i++) {
            const answer = answers[i];
            if (questions[i].mandatory) {
                if (questions[i].type === 1 && answer.length === 0) {
                    newErrors.push('This is a mandatory question');
                    flag = false;

                } 
                else if ((questions[i].type === 2 || questions[i].type === 3) && (!answer && answer !== 0)) {
                    newErrors.push('This is a mandatory question');
                    flag = false;

                } 

                else if ((questions[i].type === 4 || questions[i].type === 5) && (answer.trim().length === 0)) {
                    newErrors.push('This is a mandatory question');
                    flag = false;

                } else  {
                    newErrors.push('');
                }
            } else {
                newErrors.push('');
            }
        }
        setErrors(newErrors);
        console.log(newErrors, flag);
        return flag;
    };

    const formatAnswerData = () => {
        const answerObj = [];
        for (let i = 0; i < questions.length; i++) {
            const answer = answers[i]
            if ((answer || answer === 0) && answer.length > 0) {
                answerObj.push({
                    id: questions[i]._id,
                    answer: answer
                });
            }
        }

        const data = {
            questionnaireId: questionnaire._id,
            seeker: seekerId,
            assessedOn: new Date().toISOString(),
            associationPublished: associationPublished,
            invocation: INVOCATION,
            sections: [
                {
                    id: 0,
                    questions: answerObj
                }
            ]
        };

        return data;
    };

    const mandatoryAnswered = () => {
        for (let i = 0; i < questions.length; i++) {
            const answer = answers[i];
            if (questions[i].mandatory) {
                if ((!answer && answer !== 0) || answer.length === 0) return false;
            }
        }

        return true;
    }

    // if (!questions.length) {
    //     return <></>;
    // }

    return (
        <div className='jobseeker-screening-container'>
            <div className='container-heading'>
                Before you submit your application, tell the recruiter more about yourself
            </div>
            <div className='container-subheading'>
                * Mandatory Question
            </div>
            <div className='screening-questions-container'>
                {questions.map((question, index) => (
                    <Question 
                        key={question._id} 
                        question={question} 
                        questionNum={index+1} 
                        handleChange={handleChange}
                        value={answers[index]}
                        error={errors[index]}
                    />
                ))}
            </div>
            <div 
                className='submission-btn'
                data-tooltip-id="screening-submission"
                data-tooltip-content={mandatoryAnswered() ? '' : "Please answer all the mandatory questions"}
            >
                <Button
                    onClick={handleSubmit}
                    theme='black-round'
                    disabled={!mandatoryAnswered()}
                    // dataTooltip="test message"
                >
                    Next
                </Button>
            </div>

            <Tooltip id="screening-submission" />
        </div>
    );
}