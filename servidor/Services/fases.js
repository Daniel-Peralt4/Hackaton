const sequelize = require("./config-db.js");
const initModels = require("../models/init-models.js");
const models = initModels(sequelize);

async function nuevaFase(fase) {
    try {
        const dbfase = await models.fases.create({...fase});
        return {mensaje: "Fase creada con éxito", fase: dbfase};
    } catch (error) {
        console.error("Error al crear la fase", error);
        return {fase: []};
    }
};

module.exports = {
    nuevaFase,
}