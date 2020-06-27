import axios from "axios";

export const LOADING_SMURF_START = "LOADING_SMURF_START";
export const LOADING_SMURF_SUCCESS = "LOADING_SMURF_SUCCESS";
export const LOADING_SMURF_FAILURE = "LOADING_SMURF_FAILURE";
export const CREATE_SMURF = "CREATE_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";

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

export const addSmurf = (newSmurfy) => dispatch => {
  dispatch({ type: CREATE_SMURF })

  axios
    .post("http://localhost:3333/smurfs", newSmurfy)
    .then(res => {
      console.log(res, "hey there new smurf")
      dispatch({ type: CREATE_SMURF, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOADING_SMURF_FAILURE, payload: err.response });
    })
}

export const deleteSmurf = (id) => dispatch =>{
  dispatch({ type: DELETE_SMURF })
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log("GoodBye Little Blue Person", res.data)
      dispatch({ type: DELETE_SMURF, payload: id })
    })
  }