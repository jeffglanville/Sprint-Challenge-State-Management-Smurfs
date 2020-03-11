import React, { useState } from 'react';
import './SmurfForm';

const CreateSmurf = (e) => {
    const [smurfs, setSmurfs] = useState({ name: "", age: 0, height: 0 });


    const handleChanges = e => {
        e.preventDefault();
        setSmurfs({
            ...smurfs,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <form className="form-wrapper">
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