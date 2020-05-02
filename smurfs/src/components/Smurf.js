import React from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions/SmurfAction';

const newSmurf = ({ getSmurf, smurfs }) => {

    return(
        <div>
            <h1>Smurf Family:</h1>
            {smurfs.map((smurf) => {
                return (
                    <ul>
                        <p>Name: {smurf.name} CM</p>
                        <p>Age: {smurf.age} CM</p>
                        <p>Height: {smurf.height} CM</p>
                    </ul>
                )
            })}
            <button onClick={getSmurf}>Click for a Different Smurf</button>
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

export default connect(mapStateToProps, {getSmurf})(newSmurf);


