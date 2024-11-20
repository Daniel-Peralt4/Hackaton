const sequelize = require("./config-db.js");
const initModels = require("../models/init-models.js");
const models = initModels(sequelize);

async function nuevoProyecto(proyecto) {
    try {
        const dbproyecto = await models.proyectos.create({...proyecto});
        return {mensaje: "Proyecto creado con éxito", proyecto: dbproyecto};
    } catch (error) {
        console.error("Error al montar el proyecto", error);
        return {proyecto: []};
    }
};

async function listarProyectos() {
    try {
        const proyectos = await models.proyectos.findAll();
        return {mensaje: "Lista de Proyectos", proyectos};
    } catch (error) {
        console.log(error);
        return {mensaje: "No se encontraron proyectos"};
    }
};

async function proyectosPorEstado(estado) {
    try {
        const proyectos = await models.proyectos.findAll({
            where: {estadoproyecto: estado},
        });
        return {mensaje: "Proyectos según el estado ingresado", proyectos};
    } catch (error) {
        console.log(error);
        return {mensaje: "No se encontraron proyectos por ese estado"};
    }
};

async function proyectosPorPrograma(programa) {
    try {
        const proyectos = await models.proyectos.findAll({
            where: {idprograma: programa},
        });
        return {mensaje: "Proyectos según el estado ingresado", proyectos};
    } catch (error) {
        console.log(error);
        return {mensaje: "No se encontraron proyectos por ese estado"};
    }
};

module.exports = {
    nuevoProyecto,
    listarProyectos,
    proyectosPorEstado,
}