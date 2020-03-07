import React from 'react';
import { connect } from 'react-redux';

const Smurfs = ({ smurf, isLoading, error }) => {
    if (isLoading) {
        return <h2>Loading your little blue person!</h2>;
    }

    if (error) {
        return <h2>Oh no the evil Gargomel has snatched your little blue person :(</h2>
    }

    return (
        <div>
            <h2>Smurf: </h2>
        </div>
    )
}