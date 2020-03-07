import axios from 'axios';

export const LOADING_SMURF_START = "LOADING_SMURF_START";
export const LOADING_SMURF_SUCCESS = "LOADING_SMURF_SUCCESS";
export const LOADING_SMURF_FAILURE = "LOADING_SMURF_FAILURE";

export const getSmurf = () => dispatch => {
    dispatch({ type: LOADING_SMURF_START });
}

axios.get('/smurfs')
.then(res => {
    console.log("Smurfs here", res);
    
    dispatch({ type: LOADING_SMURF_SUCCESS, payload: res.data.smurf });
})
.catch(err => {
    console.log(err);

    dispatch({
        type: LOADING_SMURF_FAILURE,
        payload: `${err.response.message} with the response code ${err.response.code}`
    });
});
