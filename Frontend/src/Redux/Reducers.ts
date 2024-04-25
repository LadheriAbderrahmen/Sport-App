import { combineReducers } from 'redux';
import FirstReducer from './test/reducer';
import AccountReducer from './Account_User/reducer';
import GymLocationReducer from './GymLocation/reducer';

const reducers = combineReducers({
    FirstReducer,
    AccountReducer,
    GymLocationReducer,
});

export default reducers;
