const express = require("express");
const programasRouter = express.Router();
const programasService = require("../Services/programas");

programasRouter.post('/registrar', async function (req, res, next) {
    try {
        res.json(await programasService.nuevoPrograma(req.body));
    } catch (err) {
        console.error("Error al registrar el programa", err.message);
        next(err);
    }
});

module.exports = programasRouter;