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

module.exports = {
    nuevoPrograma,
}