import { LOADING_SMURF_START, LOADING_SMURF_SUCCESS, LOADING_SMURF_FAILURE, DELETE_SMURF} from '../actions/SmurfAction';

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
        case DELETE_SMURF:
            return{
                ...state,
                isLoading: false,
                smurf: state.smurf.filter(smurf => smurf.id !== action.payload)
            }
            default:
                return state;
    }
};