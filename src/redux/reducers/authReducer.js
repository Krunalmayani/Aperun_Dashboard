import { CLEAR_AUTH_REQUEST, GET_USER_DATA, RESET_STORE, SET_TOKEN, UPDATE_USER_DATA, USER_DATA } from "../action/type";


const INITIAL_STATE = {
    userAllData: [],
    updateuserdata: [],
    userData: [],
    token: null
};

export default (state = INITIAL_STATE, action = {}) => {

    switch (action.type) {
        case USER_DATA:
            return { ...state, userData: action.payload };

        case UPDATE_USER_DATA:
            return { ...state, updateuserdata: action.payload }

        case GET_USER_DATA:
            return { ...state, userAllData: action?.payload }

        case SET_TOKEN:
            return { ...state, userAllData: action?.payload }

        case CLEAR_AUTH_REQUEST:
            return INITIAL_STATE;

        case RESET_STORE:
            return INITIAL_STATE;

        default:
            return state;
    }
};