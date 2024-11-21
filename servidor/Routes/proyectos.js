const express = require("express");
const proyectosRouter = express.Router();
const proyectosService = require("../Services/proyectos");
const programasService = require("../Services/programas");

proyectosRouter.post('/registrar', async function (req, res, next) {
    try {
        res.json(await proyectosService.nuevoProyecto(req.body));
    } catch (err) {
        console.error("Error al registrar el proyecto", err.message);
        next(err);
    }
});

proyectosRouter.get('/', async function (req, res, next) {
    try {
        res.json(await proyectosService.listarProyectos(req.query.page));
    } catch (err) {
        console.error("Error al obtener los proyectos", err.message);
        next(err);
    }
});

proyectosRouter.get('/:estado', async function (req, res, next) {
    try {
        res.json(await proyectosService.proyectosPorEstado(req.params.estado));
    } catch (err) {
        console.error("Error al obtener los proyectos por dicho estado", err.message);
        next(err);
    }
});

proyectosRouter.get('/programa/:idprograma', async (req, res, next) => {
    try {
        res.json(await programasService.proyectosPorPrograma(req.params.idprograma));
    } catch (err) {
        console.error("Error al obtener los proyectos por dicho programa", err.message);
        next(err);
    }
});

module.exports = proyectosRouter;