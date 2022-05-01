const moongose = require("mongoose");

const schema = new moongose.Schema({
    name: {
        type: String,
        required: true
    },
    identification: {
        type: String,
        unique: true
    },
    status: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
})

module.exports = moongose.model('Advisers', schema)