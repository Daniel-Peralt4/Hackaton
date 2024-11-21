const express = require("express");
const fasesRouter = express.Router();
const fasesService = require("../Services/fases");

fasesRouter.post('/registrar', async function (req, res, next) {
    try {
        res.json(await fasesService.nuevaFase(req.body));
    } catch (err) {
        console.error("Error al registrar la fase", err.message);
        next(err);
    }
});

module.exports = fasesRouter;