import { FAILED, POSTSUCCESS, SUCCESS } from "./action"

const INIT_STATE = {
    Title : null
}

const FirstReducer = (state = INIT_STATE, action: any) => {

    switch (action.type) {
        case POSTSUCCESS:
            return {
                ...state,
                Title : action.payload

            }
       
        default:
            return { ...state };
    }

}

export default FirstReducer