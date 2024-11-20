const express = require("express");
const facultadesRouter = express.Router();
const facultadesService = require("../Services/facultades");

facultadesRouter.post('/registrar', async function (req, res, next) {
    try {
        res.json(await facultadesService.nuevaFacultad(req.body));
    } catch (err) {
        console.error("Error al registrar la facultad", err.message);
        next(err);
    }
});

module.exports = facultadesRouter;