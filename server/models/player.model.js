const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        minlength: [2, "Name must be at least 2 characters"]
    },
    preferredPosition: {
        type: String
    },
    gameStatus: {
        type: Array,
        default: ["undecided", "undecided", "undecided"]
    }
}, {timestamps: true})

module.exports.Player = mongoose.model("Players", PlayerSchema);