import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    questionnaireId: null,
    questions: [],
    previousQuestions: [],
    userId: null,
    userType: null,
    jobId: null,
    name: 'screening',
    invocation: 1,
};

const screeningSlice = createSlice({
    name: 'screeningSlice',
    initialState,
    reducers: {
        addQuestion: (state, action) => {
            state.questions = [...state.questions, ...action.payload];
        },

        editQuestion: (state, action) => {
            for (let i = 0; i < state.questions.length; i++) {
                if (state.questions[i]._id === action.payload.oldId) {
                    state.questions[i] = action.payload.data;
                }
            }
        },

        removeQuestion: (state, action) => {
            state.questions = state.questions.filter(
                question => question._id !== action.payload,
            );
        },

        setQuestions: (state, action) => {
            state.questions = action.payload;
        },

        rearrangeQuestion: (state, action) => {
            const { id1, id2 } = action.payload;
            let questions = state.questions;
            console.log(1, questions);
            let selectedQuestion = questions[id1];
            if (id2 < id1) {
                questions.splice(id2, 0, selectedQuestion);
                questions.splice(id1 + 1, 1);
            } else {
                questions.splice(id2 + 1, 0, selectedQuestion);
                questions.splice(id1, 1);
            }
            console.log(1, questions);

            state.questions = questions;
        },

        setPreviousQuestions(state, action) {
            state.previousQuestions = action.payload;
        },

        setQuestionnaireId: (state, action) => {
            state.questionnaireId = action.payload;
        },

        setBasicInfo: (state, action) => {
            state.jobId = action.payload.jobId;
            state.userId = action.payload.userId;
            state.userType = action.payload.userType;
        },
    },
});

export const {
    addQuestion,
    editQuestion,
    removeQuestion,
    setQuestions,
    rearrangeQuestion,
    setPreviousQuestions,
    setQuestionnaireId,
    setBasicInfo,
} = screeningSlice.actions;

export default screeningSlice.reducer;
