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

async function listarFacultades() {
    try {
        const facultades = await models.facultades.findAll();
        return {mensaje: "Lista de Facultades", facultades}
    } catch (error) {
        console.log(error)
        return {mensaje: "Facultades no encotradas"};
    }
}

async function programasPorFacultad(idfacultad) {
    try {
        const facultad = await models.facultades.findOne({
            where: { idfacultad: idfacultad },
            include: {
                model: models.programas,
                as: 'programas', // Alias configurado en la asociación
                attributes: ['idprogramas', 'programas'] // Selecciona solo los campos necesarios
            }
        });

        if (!facultad) {
            return { mensaje: "No se encontró la facultad con el ID proporcionado" };
        }
        return { mensaje: "Programas según la facultad ingresada", facultad };
    } catch (error) {
        console.log(error);
        return { mensaje: "Error al buscar los programas por facultad" };
    }
}

async function proyectosPorFacultad(idfacultad) {
    try {
        const facultad = await models.facultades.findOne({
            where: { idfacultad: idfacultad },
            include: {
                model: models.programas,
                as: 'programas',
                include: {
                    model: models.proyectos,
                    as: 'proyectos',
                    attributes: ['idproyecto', 'titulo']
                }
            }
        });
        if (!facultad) {
            return { mensaje: "No se encontró la facultad con el ID proporcionado" };
        }
        return { mensaje: "Proyectos según la facultad ingresada", facultad };
        } catch (error) {
            console.log(error);
            return { mensaje: "Error al buscar los proyectos por facultad" };
        }
}


module.exports = {
    nuevaFacultad,
    listarFacultades,
    programasPorFacultad,
    proyectosPorFacultad,
}