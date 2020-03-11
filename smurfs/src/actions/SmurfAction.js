import axios from 'axios';


export const LOADING_SMURF_START = "LOADING_SMURF_START";
export const LOADING_SMURF_SUCCESS = "LOADING_SMURF_SUCCESS";
export const LOADING_SMURF_FAILURE = "LOADING_SMURF_FAILURE";
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";

export const getSmurf = () => dispatch => {

    dispatch({ type: LOADING_SMURF_START });


axios.get('http://localhost:3333/smurfs')
.then(res => {
    console.log("Smurfs here", res.data);

    dispatch({ type: LOADING_SMURF_SUCCESS, payload: res.data});
})
.catch(err => {

    dispatch({ type: LOADING_SMURF_FAILURE, payload: err });
});

   const addNewSmurf = smurfs => {
        dispatch({ type: ADD_NEW_SMURF });
        axios
            .post("http://localhost:3333/smurfs", addNewSmurf(smurfs))
            .then(res => {console.log(res.data)})
            .catch(err => console.log(err));
    }
}