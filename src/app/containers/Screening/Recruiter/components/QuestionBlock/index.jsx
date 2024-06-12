import React, { useRef, useState, useImperativeHandle } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import AddQuestionModal from '../AddQuestion';
import { removeQuestion } from '../../slice';

import './styles.scss';

const QuestionUnit = React.forwardRef(
    (
        {
            questionDetails,
            createQuestionnaire,
            updateQuestionnaire,
            connectDropTarget,
            connectDragPreview,
            connectDragSource,
        },
        ref,
    ) => {
        const elementRef = useRef();

        connectDropTarget(elementRef);

        useImperativeHandle(ref, () => ({
            getNode: () => elementRef.current,
        }));
        return connectDragPreview(
            <div ref={elementRef}>
                <QuestionBlock
                    questionDetails={questionDetails}
                    createQuestionnaire={createQuestionnaire}
                    updateQuestionnaire={updateQuestionnaire}
                    connectDragSource={connectDragSource}
                />
            </div>,
        );
    },
);

const QuestionBlock = props => {
    const { questionDetails, createQuestionnaire, updateQuestionnaire } = props;

    const [viewOptions, setViewOptions] = useState(false);
    const [showEditQuestionModal, setShowEditQuestionModal] = useState(false);

    const questions = useSelector(state => state.reducer.screening.questions);
    const questionnaireId = useSelector(
        state => state.reducer.screening.questionnaireId,
    );
    const dispatch = useDispatch();

    const handleDelete = async () => {
        const questionIds = [];

        for (const question of questions) {
            if (question._id !== questionDetails._id) {
                questionIds.push(question._id);
            }
        }

        try {
            await updateQuestionnaire(questionnaireId, questionIds);
            dispatch(removeQuestion(questionDetails._id));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="screening-question-block" key={questionDetails._id}>
            {props.connectDragSource(<i className="icon-drag-and-drop"></i>)}
            <div className="added-question-block">
                <div className="screening-question-block-question-text">
                    {questionDetails.question}
                </div>
                {questionDetails.type <= 3 ? (
                    <>
                        <div className="screening-question-options-block">
                            <div
                                className="view-hide-option-toggle-btn"
                                onClick={() => setViewOptions(!viewOptions)}
                            >
                                {viewOptions ? 'Hide Options' : 'View Options'}
                            </div>
                        </div>
                        {/* {viewOptions ? ( */}
                        <div
                            className={`question-option-container ${
                                viewOptions ? 'visible' : ''
                            }`}
                            style={{
                                maxHeight: viewOptions
                                    ? 23 *
                                          questionDetails.answerOptions.length +
                                      'px'
                                    : '0px',
                            }}
                        >
                            {(questionDetails.answerOptions || []).map(
                                (option, index) => (
                                    <div className="single-option-row">
                                        {option}
                                    </div>
                                ),
                            )}
                        </div>
                        {/* ) : null} */}
                    </>
                ) : null}
            </div>
            <div className="action-icons">
                {questionDetails.mandatory ? (
                    <i className="icon-asterisk action-icon"></i>
                ) : null}
                <i
                    className="icon-edit-1 action-icon"
                    onClick={() => setShowEditQuestionModal(true)}
                >
                    <div className="screening-modal-container screening-actions-container ">
                        {showEditQuestionModal && (
                            <AddQuestionModal
                                handleClose={() =>
                                    setShowEditQuestionModal(false)
                                }
                                createQuestionnaire={createQuestionnaire}
                                updateQuestionnaire={updateQuestionnaire}
                                questionDetails={questionDetails}
                                isEditModal={true}
                            />
                        )}
                    </div>
                </i>
                <i
                    className="icon-delete action-icon"
                    onClick={handleDelete}
                ></i>
            </div>
        </div>
    );
};

// export default QuestionBlock;

export default DropTarget(
    'item',
    {
        hover(props, monitor, component) {
            if (!component) {
                return null;
            }

            const node = component.getNode();
            if (!node) {
                return null;
            }
            const dragIndex = monitor.getItem().index;
            const hoverIndex = props.index;
            console.log(dragIndex, hoverIndex);

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = node.getBoundingClientRect();

            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            const clientOffset = monitor.getClientOffset();

            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            props.reArrageQuestions(dragIndex, hoverIndex);

            monitor.getItem().index = hoverIndex;
        },

        drop(props) {
            props.updateQuestionsOrder();
        },
    },
    connect => ({
        connectDropTarget: connect.dropTarget(),
    }),
)(
    DragSource(
        'item',
        {
            beginDrag: props => ({
                index: props.index,
            }),
        },
        (connect, monitor) => ({
            connectDragSource: connect.dragSource(),
            connectDragPreview: connect.dragPreview(),
            isDragging: monitor.isDragging(),
        }),
    )(QuestionUnit),
);
