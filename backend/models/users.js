const moongose = require("mongoose");

const schema = new moongose.Schema({
    name: {
        type: String,
        required: true
    },
    identification: {
        type: String,
        unique: true,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    campaings: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
})

module.exports = moongose.model('User', schema)