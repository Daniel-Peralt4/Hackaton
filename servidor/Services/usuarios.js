const sequelize = require("./config-db.js");
const initModels = require("../models/init-models.js");
const models = initModels(sequelize);

async function nuevoUsuario(usuario) {
    try {
        const dbusuario = await models.usuarios.create({...usuario});
        return {mensaje: "Rol creado con éxito", usuario: dbusuario};
    } catch (error) {
        console.error("Error al crear el usuario", error);
        return {usuario: []};
    }
};

async function listarUsuarios() {
    try {
        const usuarios = await models.usuarios.findAll();
        return {mensaje: "Lista de usuarios", usuarios};
    } catch (error) {
        console.log(error);
        return {mensaje: "Usuarios no encontrados"};
    }
};

module.exports = {
    nuevoUsuario,
    listarUsuarios,
}