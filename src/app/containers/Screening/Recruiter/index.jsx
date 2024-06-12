import React, { useState, useEffect } from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from "react-redux";

import AddQuestionModal from "./components/AddQuestion";
import QuestionUnit from './components/QuestionBlock';
import PreviousQuestionsModal from "./components/PreviousQuestions";

import { Button } from "../../../components/Button";


import {
	rearrangeQuestion,
	setBasicInfo,
	setPreviousQuestions,
	setQuestionnaireId,
	setQuestions,
} from './slice';

import { getQuestions } from "../../../../services/questions/getQuestions";
import { getQuestionnaire } from "../../../../services/questionnaire/getQuestionnaire";
import { addQuestionnaire } from '../../../../services/questionnaire/addQuestionnaire';
import { updateQuestionnaire } from '../../../../services/questionnaire/updateQuestionnaire';

import '../../../fontello.scss';
import './styles.scss';

export function ScreeningRecruiter(props) {

	const { jobId, userId, userType } = props;
	const [showAddQuestionModal, setShowAddQuestionModal] = useState(false);
	const [showPrevQuestionsModal, setShowPrevQuestionsModal] = useState(false);

	const dispatch = useDispatch();

	// const invocation = useSelector(state => console.log(state, state.reducer, state.reducer.screening));
	const invocation = useSelector(state => state.reducer.screening.invocation);
	const name = useSelector(state => state.reducer.screening.name);
	const questions = useSelector(state => state.reducer.screening.questions);
	const questionnaireId = useSelector(
		state => state.reducer.screening.questionnaireId,
	);
	const previousQuestions = useSelector(
		state => state.reducer.screening.previousQuestions,
	);

	useEffect(() => {
		dispatch(setBasicInfo(props));
		if (jobId) {
			fetchQuestionnaire();
		}
		fetchPreviousQuestions();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const fetchPreviousQuestions = async () => {
		const params = {
			author: userId,
			availability: true,
			invocation,
		};
		try {
			const prevQuestions = await getQuestions(userId, params);
			dispatch(setPreviousQuestions(prevQuestions['data']['data']));
		} catch (error) {
			console.log(error);
		}
	};

	const fetchQuestionnaire = async () => {
		const params = {
			associationMeta: jobId,
			invocation: invocation,
		};
		try {
			const response = await getQuestionnaire(userId, params);
			dispatch(
				setQuestions(
					response['data']['data'][0]['sections'][0]['questions'],
				),
			);
			dispatch(setQuestionnaireId(response['data']['data'][0]._id));
		} catch (error) {
			console.log(error);
		}
	};


	const createQuestionnaire = async () => {
		const data = {
			author: userId,
			authorType: userType,
			invocation: invocation,
			name: name,
			sections: [{ type: 'static', questionIds: [] }],
		};

		if (jobId) {
			data['associationMeta'] = jobId;
		}
		try {
			const response = await addQuestionnaire(userId, data);
			dispatch(setQuestionnaireId(response['data']['data']._id));
			return response['data']['data'];
		} catch (error) {
			console.log(error);
		}
	};

	const updateCurrentQuestionnaire = async (questionnaireId, questionIds) => {
		const data = {
			sections: [{ type: 'static', questionIds: questionIds }],
		};

		try {
			const response = await updateQuestionnaire(
				userId,
				questionnaireId,
				data,
			);
			return response['data']['data'];
		} catch (error) {
			console.log(error);
		}
	};


	const reArrageQuestions = (id1, id2) => {
		dispatch(rearrangeQuestion({ id1, id2 }));
	};

	const updateQuestionsOrder = async () => {
		const questionIds = [];
		for (const question of questions) {
			questionIds.push(question._id);
		}
		const response = await updateCurrentQuestionnaire(
			questionnaireId,
			questionIds,
		);
		return response;
	};

	return (
		<DndProvider backend={HTML5Backend}>
			<div className="screening-recruiter-container ">
				<div className="screening-recruiter-heading">
					Add Screening Questions
				</div>
				<div className="screening-recruiter-sub-heading">
					Candidates will be asked to answer these question before
					they submit their application. You can add up to 10
					questions.
				</div>
				<div className="screening-question-blocks-container">
					{questions.map((question, index) => (
						<div key={question._id}>
							<QuestionUnit
								index={index}
								questionDetails={question}
								createQuestionnaire={createQuestionnaire}
								updateQuestionnaire={
									updateCurrentQuestionnaire
								}
								reArrageQuestions={reArrageQuestions}
								updateQuestionsOrder={updateQuestionsOrder}
							/>
						</div>
					))}
				</div>
				<div className="screening-actions-container footer-container">
					<Button
						onClick={() => {
							setShowAddQuestionModal(true);
						}}
						type="primary"
						classes={['screening-action-btn']}
					>
						Add Question
					</Button>
					<span className="btn-sepration-text">OR</span>
					<Button
						onClick={() => {
							setShowPrevQuestionsModal(true);
						}}
						type="primary"
						classes={['screening-action-btn']}
					>
						Previously Asked Questions
					</Button>
					<div className="screening-modal-container">
						{showAddQuestionModal && (
							<AddQuestionModal
								handleClose={() =>
									setShowAddQuestionModal(false)
								}
								createQuestionnaire={createQuestionnaire}
								updateQuestionnaire={
									updateCurrentQuestionnaire
								}
								questionDetails
							/>
						)}
						{showPrevQuestionsModal &&
                                previousQuestions.length && (
                                    <PreviousQuestionsModal
                                        handleClose={() =>
                                            setShowPrevQuestionsModal(false)
                                        }
                                        createQuestionnaire={
                                            createQuestionnaire
                                        }
                                        updateQuestionnaire={
                                            updateCurrentQuestionnaire
                                        }
                                    />
                                )}
					</div>
				</div>

			</div>
		</DndProvider>

	);
}

