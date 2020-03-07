import {LOADING_SMURF_START, LOADING_SMURF_SUCCESS} from '../actions/SmurfAction';

const initialState = {
    smurf: null,
    isLoading: false,
    error: ""
}

export const smurfReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOADING_SMURF_START:
            return{
                ...state,
                isLoading: true,
                error: ""
            };
        case LOADING_SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: ""
            };
        default:
            return state;
    }
}