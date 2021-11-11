import React, {useState, useEffect} from 'react';
import axios from 'axios';

const TeamGetter = (props) => {
    const [playerList, setPlayerList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(result => {
                setPlayerList(result.data);
                setIsLoaded(true)
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            {isLoaded && React.cloneElement(props.children, {playerList: playerList, setPlayerList: setPlayerList})}
        </>
    )
};

export default TeamGetter;