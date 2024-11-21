const express = require("express");
const programasRouter = express.Router();
const programasService = require("../Services/programas");
const facultadesService = require("../Services/facultades");

programasRouter.post('/registrar', async function (req, res, next) {
    try {
        res.json(await programasService.nuevoPrograma(req.body));
    } catch (err) {
        console.error("Error al registrar el programa", err.message);
        next(err);
    }
});
// Ruta para obtener programas por facultad
programasRouter.get('/:idfacultad', async (req, res, next) => {
    try {
        res.json(await facultadesService.programasPorFacultad(req.params.idfacultad));
    } catch (err) {
        console.error("Error al obtener los programas por dicha facultad", err.message);
        next(err);
    }
});

module.exports = programasRouter;