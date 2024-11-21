const sequelize = require("./config-db.js");
const initModels = require("../models/init-models.js");
const models = initModels(sequelize);

async function nuevoPrograma(programa) {
    try {
        const dbprograma = await models.programas.create({...programa});
        return {mensaje: "Programa creado con éxito", programa: dbprograma};
    } catch (error) {
        console.error("Error al crear el programa", error);
        return {programa: []};
    }
};

async function proyectosPorPrograma(idprograma) {
    try {
        const programa = await models.programas.findOne({
            where: { idprogramas: idprograma },
            include: {
                model: models.proyectos,
                as: 'proyectos', // Alias configurado en la asociación
                attributes: ['idproyecto', 'titulo'] // Selecciona solo los campos necesarios
            }
        });

        if (!programa) {
            return { mensaje: "No se encontró el programa con el ID proporcionado" };
        }

        return { mensaje: "Proyectos según el programa ingresado", programa };
    } catch (error) {
        console.error(error);
        return { mensaje: "Error al buscar los proyectos por programa" };
    }
}

module.exports = {
    nuevoPrograma,
    proyectosPorPrograma,
}