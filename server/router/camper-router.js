/* globals module require */

const express = require("express");

let Router = express.Router;

module.exports = function({ app, controllers }) {
    let router = new Router();

    router
        .get("/camper-list", controllers.getAllCampers)
        .get("/camper-list/:id", controllers.getCamperById)

    app.use("/api", router);

    return router;
};