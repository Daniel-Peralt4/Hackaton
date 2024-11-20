const sequelize = require("./config-db.js");
const initModels = require("../models/init-models.js");
const models = initModels(sequelize);

async function nuevaFacultad(facultad) {
    try {
        const dbfacultad = await models.facultades.create({...facultad});
        return {mensaje: "Facultad creada con éxito", facultad: dbfacultad};
    } catch (error) {
        console.error("Error al crear la facultad", error);
        return {facultad: []};
    }
};

module.exports = {
    nuevaFacultad,
}