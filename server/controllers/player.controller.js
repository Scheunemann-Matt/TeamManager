const {Player} = require('../models/player.model');

module.exports.getAllPlayers = (_, res) => {
    Player.find({}).sort({name: 'asc'})
        .then(players => res.json(players))
        .catch(err => res.status(400).json(err));
};

module.exports.getOnePlayer = (req, res) => {
    Player.findOne({_id: req.params.id})
        .then(player => res.json(player))
        .catch(err => res.status(400).json(err));
};

module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(player => res.json(player))
        .catch(err => res.status(400).json(err));
};

module.exports.updatePlayer = (req, res) => {
    Player.updateOne(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(err => res.status(400).json(err));
};

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err));
};