/* globals module */

let dataUtils = require("./utils/data-utils");

module.exports = function(models) {
    let { Camper } = models;

    return {
        getCamperById(id) {
            return dataUtils.getOneById(Camper, id);
        },
        getAllCampers() {
            return dataUtils.getAll(Camper);
        }
    };
};
