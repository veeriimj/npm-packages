import { combineReducers } from 'redux';
import screeningReducer from './app/containers/Screening/Recruiter/slice';

export const reducer = combineReducers({
    screening: screeningReducer,
})