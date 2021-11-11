import React from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const GameStatus = (props) => {
    const {playerList, setPlayerList} = props
    const {gameId} = useParams()

    const changeStatus = (e, playerId, playerIndex) => {
        let newGameStatus = [...playerList[playerIndex].gameStatus];
        newGameStatus[gameId - 1] = e.target.name;

        let newPlayer = {...playerList[playerIndex], gameStatus: newGameStatus};
        updatePlayer(playerId, newPlayer)
        .then(setPlayerList([...playerList.slice(0, playerIndex), newPlayer , ...playerList.slice(playerIndex + 1)]));
    }

    const updatePlayer = (playerId, newPlayer) => {
        return axios.put(`http://localhost:8000/api/players/${playerId}`, newPlayer)
            .then(result => console.log(result))
            .catch(err => console.error(err))
    }

    return (
        <div className="p-5">
            <h2 className="mb-3"><strong>Player Status - Game {gameId}</strong></h2>
            <h2><Link className="me-2" to="/status/game/1">Game 1</Link>|<Link className="mx-2" to="/status/game/2">Game 2</Link>|<Link className="ms-2" to="/status/game/3">Game 3</Link></h2>
            <table className="table table-dark table-striped mt-3 w-75">
                <thead>
                    <tr>
                        <th scope="col">Player Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {playerList.map( (player, i) => {
                        return (<tr key={i}>
                            <th scope="row">{player.name}</th>
                            <td>
                                <button onClick={e => changeStatus(e, player._id, i)} className={`btn ${player.gameStatus[gameId - 1] === "playing" ? "btn-success" : "btn-light"}  me-3`} name="playing">Playing</button>
                                <button onClick={e => changeStatus(e, player._id, i)} className={`btn ${player.gameStatus[gameId - 1] === "notPlaying" ? "btn-danger" : "btn-light"}  me-3`} name="notPlaying">Not Playing</button>
                                <button onClick={e => changeStatus(e, player._id, i)} className={`btn ${player.gameStatus[gameId - 1] === "undecided" ? "btn-warning" : "btn-light"}`} name="undecided">Undecided</button>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default GameStatus;