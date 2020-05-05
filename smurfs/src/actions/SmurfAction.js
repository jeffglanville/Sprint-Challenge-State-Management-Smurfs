import axios from "axios";

export const LOADING_SMURF_START = "LOADING_SMURF_START";
export const LOADING_SMURF_SUCCESS = "LOADING_SMURF_SUCCESS";
export const LOADING_SMURF_FAILURE = "LOADING_SMURF_FAILURE";
export const CREATE_SMURF = "CREATE_SMURF";

export const GetSmurf = () => dispatch => {
  dispatch({ type: LOADING_SMURF_START });

  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res, 'hello')
      dispatch({ type: LOADING_SMURF_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: LOADING_SMURF_FAILURE, payload: err });
    });
}

export const NewSmurf = () => dispatch => {
  dispatch({ type: CREATE_SMURF })

axios
  .post("http://localhost:3333/smurfs", NewSmurf)
  .then(res => {
    console.log(res, "hey there new smurf")
    dispatch({ type: CREATE_SMURF, payload: res.data });
  })
  .catch(err => {
    dispatch({ type: LOADING_SMURF_FAILURE, payload: err.response });
  })
}