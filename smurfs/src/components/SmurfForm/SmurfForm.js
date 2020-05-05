import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../../actions/SmurfAction';
import './SmurfForm';

const SmurfForm = props => {
    const [smurfState, setSmurfState] = useState({ name: "", age: "", height: "" });


    const handleChanges = e => {
        setSmurfState({
            ...smurfState,
            [e.target.name]: e.target.value
        });
    };

    const addNew = e => {
        e.preventDefault();
        const newSmurfie = smurfState
        props.addSmurf(newSmurfie)
        setSmurfState({
            name: "",
            age: "",
            height: ""
        })
    }

    return (
        <div>
            <form className="form-wrapper" onSubmit={addNew}>
                <label>Smurf Name: </label>
                <input
                    className='form-input'
                    type="text"
                    name="name"
                    placeholder="Smurf Name"
                    value={smurfState.name}
                    onChange={handleChanges}
                />
                <label>Smurf Age: years old</label>
                <input
                    className='form-input'
                    type="text"
                    placeholder="age in years"
                    name="age"
                    value={smurfState.age}
                    onChange={handleChanges}
                />
                <label>Smurf Height: </label>
                <input
                    className='form-input'
                    type="text"
                    name="height"
                    placeholder="height in MM"
                    value={smurfState.height}
                    onChange={handleChanges}
                />
                <button>Add the new smurf!</button>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}


export default connect(mapStateToProps, {addSmurf}) (SmurfForm)