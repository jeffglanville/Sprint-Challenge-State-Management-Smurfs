import React from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions/SmurfAction';

const NewSmurfs = ({ getSmurf, smurf }) => {

    return(
        <div>
            <h1>Smurf Family:</h1>
            {smurf.map((smurf) => {
                return (
                    <ul>
                        <p>Name: {smurf.name} </p>
                        <p>Age: {smurf.age} CM</p>
                        <p>Height: {smurf.height} CM</p>
                    </ul>
                )
            })}
            <button onClick={getSmurf}>Click for a Smurf</button>
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

export default connect(mapStateToProps, {getSmurf})(NewSmurfs);


