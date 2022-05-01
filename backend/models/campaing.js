const moongose = require("mongoose");

const schema = new moongose.Schema({
    name: {
        type: String,
        required: true
    },
    active: {
        type: Boolean, 
        default: true
    },
    stencil: {
        type: String,
        required: true,
    },
    pedidos: {
        type: String,
        required: true,
    },
    advisers: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
},)

module.exports = moongose.model('Campaing', schema)