import { LOADING_SMURF_START, LOADING_SMURF_SUCCESS, LOADING_SMURF_FAILURE, CREATE_SMURF } from '../actions/SmurfAction';

const initialState = {
    smurf: [],
    isLoading: false,
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOADING_SMURF_START:
            return {
                ...state,
                isLoading: true,
                error: ""
            };
        case LOADING_SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurf: action.payload,
                error: ""
            };
        case LOADING_SMURF_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        case CREATE_SMURF:
            return {
                ...state,
                isLoading: false,
                error: ""
            }
            default:
                return state;
    }
};