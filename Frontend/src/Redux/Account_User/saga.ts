import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { LoginUser, PostUser, RefreshToken } from "../../ApiCore";
import { ALoginuserfailed, ALoginusersuccess, ARefreshTokenfailed, ARefreshTokensuccess, Anavi, ApostUserfailed, ApostUsersuccess, LOGINUSER, POSTUSERACCOUNT, REFRESHTOKEN } from "./action";
import { ApiCore, setAuthorization } from "../../ApiCore/ApiCore";

const api = new ApiCore()
function* loginuser({ payload }: any): Generator {
    try {
        const response: any = yield call(LoginUser, payload)
        console.log(response.data)
        if (response.status === 200) {
            yield put(ALoginusersuccess(response.data))
            setAuthorization(response['data'].token)
            api.setLoggedInUser(response.data)
        }
    } catch (error : any) {
        yield put(ALoginuserfailed(error['response'].data))
    }
    }

    function* RefreshTokensaga({payload} : any):Generator{
        try{
            const response : any = yield call(RefreshToken , payload )
            console.log(response.data)
            api.setrefreshtoken(response.data)
            setAuthorization(response.data)
            if(response.status ===  200){
                yield put(ARefreshTokensuccess(response.data))
            }
        }catch(error){
            yield put(ARefreshTokenfailed(error))
        }
    }

    function* postUsersaga({ payload }: any): Generator {
        try {
            const reponse: any = yield call(PostUser, payload)
            if (reponse.status === 200) {
                yield put(ApostUsersuccess(reponse.data))
            }
        } catch (error) {
            yield put(ApostUserfailed(error))
        }
    }


    export function* watchpostUsersaga() {
        yield takeEvery(POSTUSERACCOUNT, postUsersaga)
    }
    export function* watchloginUsersaga() {
        yield takeEvery(LOGINUSER, loginuser)
    }

    export function* watchRefreshTokensaga() {
        yield takeEvery(REFRESHTOKEN, RefreshTokensaga)
    }
    function* AccountUserSaga() {
        yield all([fork(watchpostUsersaga), fork(watchloginUsersaga) , fork(watchRefreshTokensaga)])
    }
    export default AccountUserSaga
