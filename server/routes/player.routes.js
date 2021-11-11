const PlayersController = require('../controllers/player.controller') 

module.exports = app => {
    app.get('/api/players', PlayersController.getAllPlayers);
    app.get('/api/players/:id', PlayersController.getOnePlayer);
    app.post('/api/players', PlayersController.createPlayer);
    app.put('/api/players/:id', PlayersController.updatePlayer);
    app.delete('/api/players/:id', PlayersController.deletePlayer);
}