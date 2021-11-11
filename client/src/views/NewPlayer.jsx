import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import PlayerForm from '../components/PlayerForm';

const NewPlayer = () => {
    const history = useHistory();

    const addPlayer = (formData) => {
        return axios.post("http://localhost:8000/api/players/", formData)
            .then((res) => {
                console.log(res);
                history.push("/players/list");
                return
            })
            .catch(err => err)
    }

    return (
        <div className="p-5">
            <h2><Link className="me-2" to="/players/list">List</Link>|<span className="ms-2">Add Player</span></h2>
            <PlayerForm initialFormData={{name: ""}} submitCallBack={addPlayer}></PlayerForm>
        </div>
    );
};

export default NewPlayer;