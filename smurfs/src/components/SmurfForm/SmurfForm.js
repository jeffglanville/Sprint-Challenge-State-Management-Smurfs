import React, { useState } from 'react';
import axios from 'axios';
import './SmurfForm';

const CreateSmurf = (props) => {
    const [smurfs, setSmurfs] = useState({ name: "", age: 0, height: 0 });

    const addNewSmurf = e => {
        e.preventDefault();

        axios
            .post("http://localhost:3333/smurfs", smurfs)
            .then(res => props.history.push('/'))
            .catch(err => console.log(err));
    }

    const handleChanges = e => {
        setSmurfs({
            ...smurfs,
            [e.target.name]: e.target.value,
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
                    value={smurfs.name}
                    onChange={handleChanges}
                />
                <label>Smurf Age: </label>
                <input
                    className='form-input'
                    type="number"
                    name="age"
                    value={smurfs.age}
                    onChange={handleChanges}
                />
                <label>Smurf Height: </label>
                <input
                    className='form-input'
                    type="number"
                    name="height"
                    value={smurfs.height}
                    onChange={handleChanges}
                />
                <button>Create the new smurf!</button>
            </form>
        </div>
    )
}

export default CreateSmurf;