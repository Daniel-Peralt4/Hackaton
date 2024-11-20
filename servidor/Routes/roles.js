const express = require("express");
const rolesRouter = express.Router();
const rolesService = require("../Services/roles");

rolesRouter.post('/registrar', async function (req, res, next) {
    try {
        res.json(await rolesService.nuevoRol(req.body));
    } catch (err) {
        console.error("Error al registrar rol", err.message);
        next(err);
    }
});

rolesRouter.get('/', async function (req, res, next) {
    try {
        res.json(await rolesService.listarRoles(req.query.page));
    } catch (err) {
        console.error("Error al obtener roles", err.message);
        next(err);
    }
});

module.exports = rolesRouter;