import { CLEAR_AUTH_REQUEST, GET_TOKEN_HISTORY, RESET_STORE } from "../action/type";


const INITIAL_STATE = {
    tokenHistory: [],
};

export default (state = INITIAL_STATE, action = {}) => {

    switch (action.type) {
        case GET_TOKEN_HISTORY:
            return { ...state, tokenHistory: action?.payload?.data || [] };
            
        case CLEAR_AUTH_REQUEST:
            return INITIAL_STATE;

        case RESET_STORE:
            return INITIAL_STATE;

        default:
            return state;
    }
};