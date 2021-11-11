import React, {useState, useEffect} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
import PlayerForm from '../components/PlayerForm';

const EditPlayer = () => {
    const history = useHistory();
    const [player, setPlayer] = useState({});
    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const {playerId} = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/players/${playerId}`)
            .then(result => {
                setPlayer(result.data)
                setIsLoaded(true)
            })
            .catch(() => setError(true));
    }, [playerId])

    const updatePlayer = (formData) => {
        axios.put(`http://localhost:8000/api/players/${playerId}`, formData)
            .then((res) => {
                console.log(res)
                history.push("/players/list")})
            .catch(err => err)
    }
    return (
        <div className="p-5">
            <h2><Link className="me-2" to="/players/list">List</Link>|<span className="ms-2">Add Player</span></h2>
            {error && 
                <p>We're sorry, but we could not find the player you are looking for. Would you like to add this player to our database?</p>
            }
            {isLoaded && <PlayerForm initialFormData={player} submitCallBack={updatePlayer}></PlayerForm>}
        </div>
    );
};

export default EditPlayer;