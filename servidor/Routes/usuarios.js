const express = require("express");
const usuariosRouter = express.Router();
const usuariosService = require("../Services/usuarios");

usuariosRouter.post('/registrar', async function (req, res, next) {
    try {
        res.json(await usuariosService.nuevoUsuario(req.body));
    } catch (err) {
        console.error("Error al registrar el usuario", err.message);
        next(err);
    }
});

usuariosRouter.get('/', async function (req, res, next) {
    try {
        res.json(await usuariosService.listarUsuarios(req.query.page));
    } catch (err) {
        console.error("Error al obtener los usuarios", err.message);
        next(err);
    }
});

module.exports = usuariosRouter;