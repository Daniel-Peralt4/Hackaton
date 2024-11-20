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

async function autenticarUsuario(user, contraseña) {
    try {
        const usuario = await models.usuarios.findOne({where: {usuario: user}});
        
        if(!usuario){
            return {mensaje: "Usuario no encontrado", autenticado: false}
        }
        if(usuario.contraseña !== contraseña){
            return {mensaje: "Contraseña incorrecta", autenticado: false}
        }

        return {mensaje: "Usuario autenticado correctamente", autenticado: true, usuario}
    } catch (error) {
        console.log("Error al autenticar el usuario", error)
        return {mensaje: "Error al autenticar usuario", autenticado: false}
    }
};

module.exports = {
    nuevoUsuario,
    listarUsuarios,
    autenticarUsuario,
}