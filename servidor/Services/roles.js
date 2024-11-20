const sequelize = require("./config-db.js");
const initModels = require("../models/init-models.js");
const models = initModels(sequelize);

async function nuevoRol(rol) {
    try {
        const dbrol = await models.roles.create({...rol});
        return {mensaje: "Rol creado con éxito", rol: dbrol};
    } catch (error) {
        console.error("Error al crear el rol", error);
        return {rol: []};
    }
};

async function listarRoles() {
    try {
        const roles = await models.roles.findAll();
        return {mensaje: "Lista de roles", roles};
    } catch (error) {
        console.log(error);
        return {mensaje: "Roles no encontrados"};
    }
}

module.exports = {
    nuevoRol,
    listarRoles,
};