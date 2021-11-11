import React from 'react'
import './bootstrap.css'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import TeamHeader from './components/TeamHeader';
import TeamList from './components/TeamList';
import TeamGetter from './components/TeamGetter';
import GameStatus from './components/GameStatus';
import NewPlayer from './views/NewPlayer';
import EditPlayer from './views/EditPlayer';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <TeamHeader />
        <Switch>
          <Route path="/players/list">
            <TeamGetter>
              <TeamList />
            </TeamGetter>
          </Route>
          <Route path="/players/addplayer">
            <NewPlayer />
          </Route>
          <Route path="/players/:playerId/edit">
            <EditPlayer />
          </Route>
          <Route path="/status/game/:gameId">
            <TeamGetter>
              <GameStatus />
            </TeamGetter>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
