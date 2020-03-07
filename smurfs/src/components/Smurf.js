import React from 'react';
import { connect } from 'react-redux';
import {getSmurf} from '../actions/SmurfAction';

const Quotes = ({ getSmurf, smurf, isLoading, error }) => {
    if (isLoading) {
        return<h2>Fetching your smurf at the moment :P</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return(
        <div>
            <h2>Smurf: {smurf}</h2>
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

export default connect(mapStateToProps, {getSmurf})(Smurfs);