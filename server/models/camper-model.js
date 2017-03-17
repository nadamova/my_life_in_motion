/* globals require module */

const modelRegistrator = require('./utils/model-registrator');

module.exports = modelRegistrator.register('Camper', {
    model: {
        type: String,
        unique: true
    },
    imageUrl: {
        type: String
    },
    capacity: {
        type: String
    },
    year: {
        type: String
    },
    consumption: {
        type: String
    },
    airconditioning: {
        type: String
    },
    fridge: {
        type: String
    },
    tv: {
        type: String
    },
    sunblocker: {
        type: String
    },
    price: {
        type: Number
    },
    comments: [{
        author: String,
        body: String,
        postDate: Date
    }]
})