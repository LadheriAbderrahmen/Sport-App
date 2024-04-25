import { LOGINUSER, LOGINUSERFAILED, LOGINUSERSUCCESS, NAVI, POSTUSERACCOUNT, POSTUSERACCOUNTFAILED, POSTUSERACCOUNTSUCCESS, REFRESHTOKEN, REFRESHTOKENFAILED, REFRESHTOKENSUCCESS } from "./action"

const INIT_STATE = {
    loginuser : null,
    resp: null ,
    error : null,
    loading : false,
    nav : null,
    newAccessToken:null
}

const AccountReducer = (state = INIT_STATE , action: any) => {

    switch (action.type) {
        case LOGINUSER :
            return{
                ...state , 
                loading : true
            }
        case LOGINUSERSUCCESS : 
            return {
                ...state ,
                loading : false ,
                loginuser : action.payload
            }
        case LOGINUSERFAILED:
            return{
                ...state ,
                loading : false,
                error : action.payload
            }
        case NAVI:
            return {
                ...state,
                nav : action.payload
            }
        case POSTUSERACCOUNT:
            return {
                ...state,
                loading : true,
            }
        case POSTUSERACCOUNTSUCCESS:
            return {
                ...state,
                resp: action.payload,
                loading : false
            }
        case POSTUSERACCOUNTFAILED:
            return {
                ...state,
                error: action.payload,
                loading : false
            }
        case REFRESHTOKEN :
            return{
                ...state,
                loading : false
            }
            case REFRESHTOKENSUCCESS:
            return {
                ...state,
                newAccessToken : action.payload,
                loading : false
            }
        case REFRESHTOKENFAILED:
            return {
                ...state,
                error: action.payload,
                loading : false
            }
        default:
            return { ...state };
    }

}

export default AccountReducer