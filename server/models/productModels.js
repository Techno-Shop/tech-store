const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
    },
    field: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    instock: {
        type: Boolean,
        default: true
    },
    description: {
        type: String,
        default: "latest available of this generation "

    },
    image: {
        type: String,
        default: "coming soon"

    }


});
const product = mongoose.model('tech', productSchema);

module.exports = product;