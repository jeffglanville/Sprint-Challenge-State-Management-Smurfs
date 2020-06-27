import React from 'react';
import { connect } from 'react-redux';
import { GetSmurf, deleteSmurf } from '../actions/SmurfAction';
import './Smurfs.css';

const deleteHandle = (id) => {
    deleteSmurf(id);
}

const NewSmurfs = ({ GetSmurf, smurf }) => {
    return(
        <div className="smurf-wrapper">
            <h1>Smurf Family:</h1>
            {smurf.map((smurf) => {
                return (
                    <ul className="smurf">
                        <p>Name: {smurf.name} </p>
                        <p>Age: {smurf.age} CM</p>
                        <p>Height: {smurf.height} CM</p>
                    </ul>
                )
            })}
            <button onClick={GetSmurf}>Click for Smurf Family</button>
            <button onClick={deleteHandle}>Delete the Smurf</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurf: state.smurf,
        isLoading: state.isLoading,
        error: state.error
    };
};

export default connect(mapStateToProps, {GetSmurf})(NewSmurfs);


