// rootSaga.js
import { all } from 'redux-saga/effects';
import AccountUserSaga from './Account_User/saga';
import GymLocationSaga from './GymLocation/saga';

function* rootSaga() {
  yield all([
     AccountUserSaga() , GymLocationSaga() , GymLocationSaga() 
]);
}

export default rootSaga;
