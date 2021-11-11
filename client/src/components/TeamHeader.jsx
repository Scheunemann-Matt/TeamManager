import React from 'react';
import {Link} from 'react-router-dom';

const TeamHeader = () => {
    return (
        <div className="my-3 pt-3">
            <h1>
            <Link className="me-3" to="/players/list">Manage Players</Link>
            |
            <Link className="ms-3" to="/status/game/1">Manage Player Status</Link>
            </h1>
        </div>
    );
};

export default TeamHeader;