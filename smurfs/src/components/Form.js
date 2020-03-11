import React, {useState} from 'react';
import axios from 'axios';

const createSmurf = (props) => {
    const [smurf, setSmurf] = useState({ name: "", age: 0, height: 0 });


const addNewSmurf = e => {
    e.preventDefault();

    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => props.history.push("/"))
        .catch(err => console.log(err));
}

const handleChanges = e => {
    setSmurf({
        ...smurf,
        [e.target.name]: e.target.value,
    })
}

return (
    <div>
        <form onSubmit={addNewSmurf}>
            <label>Smurf Name: </label>
            <input
                type="text"
                name="name"
                value={smurf.name}
                onChange={handleChanges}
            />
            <label>Smurf Age: </label>
            <input
                type="number"
                name="age"
                value={smurf.age}
                onChange={handleChanges}
            />
            <label>Smurf Height: </label>
            <input
                type="number"
                name="height"
                value={smurf.height}
                onChange={handleChanges}
            />
            <button>Your new Smurf is just a click away!</button>
        </form>
    </div>
)
}

export default createSmurf;