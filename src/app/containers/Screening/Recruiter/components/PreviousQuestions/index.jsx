import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Checkbox } from '../../../../../components/Checkbox';
import { Button } from '../../../../../components/Button';

import { addQuestion } from '../../slice';
import { useOutsideClickDetector } from '../../../../../../utils/useOutsideClickDetector';

import './styles.scss';

const PreviousQuestionsModal = props => {
    const { handleClose, createQuestionnaire, updateQuestionnaire } = props;
    const modalRef = useRef(null);

    const previousQuestions = useSelector(
        state => state.reducer.screening.previousQuestions,
    );
    const questions = useSelector(state => state.reducer.screening.questions);
    let questionnaireId = useSelector(
        state => state.reducer.screening.questionnaireId,
    );
    const dispatch = useDispatch();
    const addedQuestions = [];
    for (const question of questions) {
        for (const prevQue of previousQuestions) {
            if (question._id === prevQue._id) {
                addedQuestions.push(question._id);
            }
        }
    }
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [viewOptions, setViewOptions] = useState(
        Array.from({ length: 10 }, () => false),
    );

    useOutsideClickDetector(modalRef, handleClose);

    const toggleShowOptions = index => {
        const viewOptionsTemp = [...viewOptions];
        viewOptionsTemp[index] = !viewOptionsTemp[index];
        setViewOptions(viewOptionsTemp);
    };

    const handleSelectQuestion = selectedQuestion => {
        // screening can have maximum 10 question limit
        if (questions.length + selectedQuestions.length >= 10) {
            return;
        }
        // added question can't be unselected
        if (addedQuestions.includes(selectedQuestion._id)) {
            return;
        }

        let selectedQuestionsTemp = [...selectedQuestions];
        if (selectedQuestionsTemp.includes(selectedQuestion._id)) {
            selectedQuestionsTemp = selectedQuestionsTemp.filter(
                id => id !== selectedQuestion._id,
            );
        } else {
            selectedQuestionsTemp.push(selectedQuestion._id);
        }

        setSelectedQuestions(selectedQuestionsTemp);
    };

    const addSelectedQuestions = async () => {
        if (!questionnaireId) {
            const data = await createQuestionnaire();
            questionnaireId = data;
        }

        let questionIds = [];
        const questionsToAdd = [];

        for (const question of questions) {
            questionIds.push(question._id);
        }

        questionIds = [...questionIds, ...selectedQuestions];

        for (const ques of previousQuestions) {
            if (selectedQuestions.includes(ques._id)) {
                questionsToAdd.push(ques);
            }
        }
        await updateQuestionnaire(questionnaireId, questionIds);
        dispatch(addQuestion(questionsToAdd));
        handleClose();
    };

    return (
        <div
            className="screening-previous-questions-modal-container modal-conainer"
            ref={modalRef}
        >
            <div className="modal-header">Use previously added questions</div>
            <div className="previous-questions-section">
                {previousQuestions.map((question, index) => (
                    <div className="previous-question-row" key={question._id}>
                        <Checkbox
                            onClick={() => handleSelectQuestion(question)}
                            checked={
                                selectedQuestions.includes(question._id) ||
                                addedQuestions.includes(question._id)
                            }
                            label={question.question}
                            name="question"
                            id={`${question._id}`}
                            inputProps={{
                                disabled: addedQuestions.includes(question._id),
                            }}
                        />

                        {question.type < 3 ? (
                            <div className="option-block">
                                <div className="screening-question-options-block">
                                    <div
                                        className="view-hide-option-toggle-btn"
                                        onClick={() => toggleShowOptions(index)}
                                    >
                                        {viewOptions[index]
                                            ? 'Hide Options'
                                            : 'View Options'}
                                    </div>
                                </div>
                                <div
                                    className={`question-option-container ${
                                        viewOptions[index] ? 'visible' : ''
                                    }`}
                                    style={{
                                        maxHeight: viewOptions[index]
                                            ? 23 *
                                                  question.answerOptions
                                                      .length +
                                              'px'
                                            : '0px',
                                    }}
                                >
                                    {(question.answerOptions || []).map(
                                        option => (
                                            <div className="single-option-row">
                                                {option}
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
            <div className="footer-section">
                <Button
                    onClick={addSelectedQuestions}
                    type="primary"
                    classes={[
                        'screening-action-btn',
                        !selectedQuestions.length ? 'disabled-btn' : '',
                    ]}
                    disabled={!selectedQuestions.length}
                >
                    Add Selected Questions
                </Button>
                <span className="action-link" onClick={handleClose}>
                    Cancel
                </span>
                <span className="added-question-count">
                    Your Added Questions:{' '}
                    {questions.length + selectedQuestions.length}/10
                </span>
            </div>
        </div>
    );
};

export default PreviousQuestionsModal;

// if question is already selected, it should be checked and disabled
// if num of total questions is 10 then no questions can be further selected
