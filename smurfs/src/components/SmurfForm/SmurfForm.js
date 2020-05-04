import React, { useState } from 'react';
import { connect } from 'react-redux';
import './SmurfForm';

const CreateSmurf = () => {
    const [smurfs, setSmurfs] = useState({ name: "", age: 0, height: 0 });


    const handleChanges = e => {
        e.preventDefault();
        setSmurfs({
            ...smurfs,
            [e.target.name]: e.target.value,
        })
    }

    const addNewSmurf = e => {
        const newestSmurf = smurfs
        addNewSmurf(newestSmurf)
        setSmurfs({
            name: "",
            age: "",
            height: ""
        })
    }

    return (
        <div>
            <form className="form-wrapper" onSubmit={addNewSmurf}>
                <label>Smurf Name: </label>
                <input
                    className='form-input'
                    type="text"
                    name="name"
                    placeholder="Smurf Name"
                    value={smurfs.name}
                    onChange={handleChanges}
                />
                <label>Smurf Age: years old</label>
                <input
                    className='form-input'
                    type="number"
                    name="age"
                    value={smurfs.age}
                    onChange={handleChanges}
                />
                <label>Smurf Height: MM</label>
                <input
                    className='form-input'
                    type="number"
                    name="height"
                    value={smurfs.height}
                    onChange={handleChanges}
                />
                <button>Add the new smurf!</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}
export default connect(mapStateToProps, {addNewSmurf})(CreateSmurf)