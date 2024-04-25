import {  POSTGYMLOCATION, POSTGYMLOCATIONFAILED, POSTGYMLOCATIONSUCCESS } from "./action"

const INIT_STATE = {
    gym_loco : null,
    error : null,
    loading : false,
}

const GymLocationReducer = (state = INIT_STATE , action: any) => {

    switch (action.type) {
        
        case POSTGYMLOCATION:
            return {
                ...state,
                loading : true,
            }
        case POSTGYMLOCATIONSUCCESS:
            return {
                ...state,
                gym_loco: action.payload,
                loading : false
            }
        case POSTGYMLOCATIONFAILED:
            return {
                ...state,
                error: action.payload,
                loading : false
            }
        default:
            return { ...state };
    }

}

export default GymLocationReducer