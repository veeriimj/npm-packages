import React, { useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Dropdown } from '../../../../../components/Dropdown';
import { Checkbox } from '../../../../../components/Checkbox';
import { Button } from '../../../../../components/Button';


import { addQuestion as addQuestionService } from '../../../../../../services/questions/addQuestion';
import { updateQuestion } from '../../../../../../services/questions/updateQuestion';

import { useOutsideClickDetector } from '../../../../../../utils/useOutsideClickDetector';

import { questionTypes } from '../../../../../../constants/questionTypes';

import { addQuestion as addQuestionReducer, editQuestion } from '../../slice';

import './styles.scss';

const AddQuestionModal = props => {
    const { handleClose, createQuestionnaire, updateQuestionnaire } = props;
    const isEditModal = props.isEditModal || false;
    const questionDetails = props.questionDetails || {};
    const question = questionDetails.question || '';
    const type = questionDetails.type || 1;
    const mandatory = questionDetails.mandatory || false;
    const answerOptions = questionDetails.answerOptions || ['', ''];

    const modalRef = useRef(null);

    const dispatch = useDispatch();
    const userId = useSelector(state => state.reducer.screening.userId);
    const invocation = useSelector(state => state.reducer.screening.invocation);
    const questions = useSelector(state => state.reducer.screening.questions);
    let questionnaireId = useSelector(
        state => state.reducer.screening.questionnaireId,
    );

    const [questionText, setQuestionText] = useState(question);
    const [questionType, setQuestionType] = useState(type);
    const [isMandatory, setIsMandatory] = useState(mandatory);
    const [options, setOptions] = useState(answerOptions); //at least 2 options by default
    const [optionErrors, setOptionErrors] = useState({});

    useOutsideClickDetector(modalRef, handleClose);

    const handleOptionChange = (ev, index) => {
        const { value } = ev.target;
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const addOption = () => {
        const newOptions = [...options, ''];
        setOptions(newOptions);
    };

    const deleteOption = index => {
        const newOptions = options.filter((_, i) => i !== index);
        const newOptionErrors = { ...optionErrors, [index]: '' };
        setOptionErrors(newOptionErrors);
        setOptions(newOptions);
    };

    const validateOptions = () => {
        let isValid = true;
        let errors = { ...optionErrors };
        for (let index = 0; index < options.length; index++) {
            const option = options[index];
            let isValidOption = true;
            if (!option.trim()) {
                errors = { ...errors, [index]: 'Please enter option' };
                isValidOption = false;
            } else {
                for (let j = 0; j < index; j++) {
                    if (
                        options[j].toLocaleLowerCase() ===
                        options[index].toLocaleLowerCase()
                    ) {
                        errors = {
                            ...errors,
                            [index]:
                                'You have already added this option. Please remove or change this.',
                        };
                        isValidOption = false;
                    }
                }
            }
            if (isValidOption) {
                errors = { ...errors, [index]: '' };
            } else {
                isValid = false;
            }
        }
        setOptionErrors(errors);
        return isValid;
    };

    const validate = () => {
        if (!questionText.trim().length) {
            // set question error here
            return false;
        }
        if (!validateOptions()) {
            return false;
        }
        return true;
    };

    const handleAddEditQuestion = async () => {
        if (validate()) {
            try {
                if (!questionnaireId) {
                    const result = await createQuestionnaire();
                    questionnaireId = result;
                }

                const data = {
                    question: questionText,
                    type: questionType,
                    author: userId,
                    mandatory: isMandatory,
                    invocation: invocation,
                };

                if (questionType < 3) {
                    data['answerOptions'] = options;
                }
                const questionIds = [];
                if (isEditModal) {
                    const response = await updateQuestion(
                        userId,
                        questionDetails._id,
                        data,
                    );
                    const newQuestionId = response['data']['data'];
                    for (const question of questions) {
                        if (question._id === questionDetails._id) {
                            questionIds.push(newQuestionId);
                        } else {
                            questionIds.push(question._id);
                        }
                    }
                    dispatch(
                        editQuestion({
                            oldId: questionDetails._id,
                            data: { ...data, _id: newQuestionId },
                        }),
                    );
                } else {
                    const response = await addQuestionService(userId, data);
                    const newQuestionId = response['data']['data'];
                    for (const question of questions) {
                        questionIds.push(question._id);
                    }
                    questionIds.push(newQuestionId);
                    dispatch(
                        addQuestionReducer([{ ...data, _id: newQuestionId }]),
                    );
                }
                await updateQuestionnaire(questionnaireId, questionIds);
                handleClose();
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div
            className="screening-add-question-modal-container modal-conainer"
            ref={modalRef}
        >
            <div className="modal-header-content">
                <Dropdown
                    options={questionTypes}
                    onChange={e => setQuestionType(+e)}
                    defaultValue={questionType}
                    classes={['screening-question-type-dropdown']}
                />
                <Checkbox
                    onClick={() => setIsMandatory(!isMandatory)}
                    checked={isMandatory}
                    label="Mandatory"
                    name="isMandatory"
                    id="isMandatory"
                />
            </div>
            <div className="modal-content-section">
                <div className="section-heading">Question Text*</div>
                <div className="question-area">
                    <textarea
                        className="question-text-area screening-text-area"
                        placeholder="What would you like to ask?"
                        value={questionText}
                        onChange={e => setQuestionText(e.target.value)}
                        maxLength={2000}
                    ></textarea>
                </div>
                {questionType < 3 && (
                    <div className="options-area">
                        {options.map((option, index) => (
                            <>
                                <div className="options-area-block">
                                    <textarea
                                        className="option-text-area screening-text-area"
                                        placeholder={`Option${index + 1}`}
                                        value={option}
                                        onChange={ev =>
                                            handleOptionChange(ev, index)
                                        }
                                        maxLength={500}
                                    ></textarea>
                                    {options.length > 2 && (
                                        <span
                                            className="icon-cross"
                                            onClick={() => deleteOption(index)}
                                        ></span>
                                    )}
                                </div>
                                {optionErrors[index] ? (
                                    <div className="options-error">
                                        {optionErrors[index]}
                                    </div>
                                ) : null}
                            </>
                        ))}
                        {options.length < 15 ? (
                            <span className="action-link" onClick={addOption}>
                                Add Option
                            </span>
                        ) : (
                            <span>Maximum 15 options can be added</span>
                        )}
                    </div>
                )}
            </div>
            <div className="modal-footer-section">
                <Button
                    onClick={handleAddEditQuestion}
                    type="primary"
                    classes={[
                        'screening-action-btn',
                        !questionText.trim().length ||
                        (questionType <= 2 &&
                            !(
                                options[0].trim().length &&
                                options[1].trim().length
                            ))
                            ? 'disabled-btn'
                            : '',
                    ]}
                    disabled={
                        !questionText.trim().length ||
                        (questionType <= 2 &&
                            !(
                                options[0].trim().length &&
                                options[1].trim().length
                            ))
                    }
                >
                    {!isEditModal ? 'Add' : 'Save'}
                </Button>
                <span className="action-link" onClick={handleClose}>
                    Cancel
                </span>
            </div>
        </div>
    );
};

export default AddQuestionModal;
