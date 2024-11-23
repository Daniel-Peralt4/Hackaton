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

usuariosRouter.post('/login', async function(req, res, next) {
    try {
        const { usuario, contraseña } = req.body;
        const resultado = await usuariosService.autenticarUsuario(usuario, contraseña);
        
        if (!resultado.autenticado) {
            return res.status(401).json({ mensaje: resultado.mensaje });
        }

        res.status(200).json({ mensaje: resultado.mensaje, usuario: resultado.dbusuario });
    } catch (err) {
        console.error("Error mientras se autenticaba el usuario", err.message);
        next(err);
    }
});

module.exports = usuariosRouter;