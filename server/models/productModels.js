const mongoose = require('mongoose');
const productSchema= new mongoose.Schema({
    name: {
        type: String,
        },
    field: {
        type: string,
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
    default:"latest available of this generation "

    },
    image: {
        type: Array,
        required: true
    }
   

});
const product= mongoose.model('tech', productSchema);

module.exports = product;