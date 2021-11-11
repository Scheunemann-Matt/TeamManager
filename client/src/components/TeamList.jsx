import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const TeamList = (props) => {
    const {playerList, setPlayerList} = props
    const [deleting, setDeleting] = useState(false)

    const deleteHandler = (player) => {
        setDeleting(player);
    }

    const deletePlayer = (playerId) => {
        axios.delete(`http://localhost:8000/api/players/${playerId}`)
            .then(result => {
                console.log(result);
                setDeleting(false);
                removeFromDom(playerId);
            })
            .catch(err => {
                console.error(err);
                setDeleting(false);
            });
    };

    const removeFromDom = (playerId) => {
        setPlayerList(playerList.filter((player) => player._id !== playerId));
    }


    return (
        <div className="p-5">
            <h2><span className="me-2">List</span>|<Link className="ms-2" to="/players/addplayer">Add Player</Link></h2>
            <table className="table table-dark table-striped mt-3">
                <thead>
                    <tr>
                        <th scope="col">Player Name</th>
                        <th scope="col">Preferred Position</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {playerList.map( (player, i) => {
                        return (<tr key={i}>
                            <th scope="row"><Link to={`/players/${player._id}/edit`}>{player.name}</Link></th>
                            <td>{player.preferredPosition}</td>
                            <td><button onClick={_ => deleteHandler(player)} className="btn btn-danger">Delete</button></td>
                        </tr>)
                    })}
                </tbody>
            </table>
            { deleting &&
                <div className="border border-secondary border-5 rounded fixed-bottom w-75 mx-auto p-5 d-flex justify-content-between align-items-center mb-5">
                    <h3 className="text-danger col-8 ms-5">Are you sure you want to delete {deleting.name}?</h3>
                    <button onClick={_ => setDeleting(false)} className="btn btn-secondary p-2 col-1">Cancel</button>
                    <button onClick={_ => deletePlayer(deleting._id)} className="btn btn-danger p-2 col-1">Delete</button>
                </div>
            }
        </div>
    );
};

export default TeamList;