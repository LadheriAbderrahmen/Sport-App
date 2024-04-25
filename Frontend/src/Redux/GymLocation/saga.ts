import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { FetchSportLocal } from "../../ApiCore";
import { ApostGym, ApostGymfailed, ApostGymsuccess, POSTGYMLOCATION } from "./action";




    function* postGymsaga({ payload }: any): Generator {
        try {
            const reponse: any = yield call(FetchSportLocal, payload)
            if (reponse.status === 200) {
                yield put(ApostGymsuccess(reponse.data))
            }
        } catch (error) {
            yield put(ApostGymfailed(error))
        }
    }


    export function* watchpostGymsaga() {
        yield takeEvery(POSTGYMLOCATION, postGymsaga)
    }
   

    function* GymLocationSaga() {
        yield all([fork(watchpostGymsaga)])
    }
    export default GymLocationSaga
