var DataTypes = require("sequelize").DataTypes;
var _facultades = require("./facultades");
var _fases = require("./fases");
var _programas = require("./programas");
var _proyectos = require("./proyectos");
var _roles = require("./roles");
var _rolesproyectos = require("./rolesproyectos");
var _tareas = require("./tareas");
var _usuarioproyecto = require("./usuarioproyecto");
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var facultades = _facultades(sequelize, DataTypes);
  var fases = _fases(sequelize, DataTypes);
  var programas = _programas(sequelize, DataTypes);
  var proyectos = _proyectos(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var rolesproyectos = _rolesproyectos(sequelize, DataTypes);
  var tareas = _tareas(sequelize, DataTypes);
  var usuarioproyecto = _usuarioproyecto(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);

  programas.belongsTo(facultades, { as: "idfacultad_facultade", foreignKey: "idfacultad"});
  facultades.hasMany(programas, { as: "programas", foreignKey: "idfacultad"});
  tareas.belongsTo(fases, { as: "idfase_fase", foreignKey: "idfase"});
  fases.hasMany(tareas, { as: "tareas", foreignKey: "idfase"});
  fases.belongsTo(proyectos, { as: "idproyecto_proyecto", foreignKey: "idproyecto"});
  proyectos.hasMany(fases, { as: "fases", foreignKey: "idproyecto"});
  programas.hasMany(proyectos, { as: "proyectos", foreignKey: "idprograma" });
  proyectos.belongsTo(programas, { as: "programa", foreignKey: "idprograma" });
  usuarioproyecto.belongsTo(proyectos, { as: "idproyecto_proyecto", foreignKey: "idproyecto"});
  proyectos.hasMany(usuarioproyecto, { as: "usuarioproyectos", foreignKey: "idproyecto"});
  usuarios.belongsTo(roles, { as: "idrol_role", foreignKey: "idrol"});
  roles.hasMany(usuarios, { as: "usuarios", foreignKey: "idrol"});
  usuarioproyecto.belongsTo(rolesproyectos, { as: "idrolproyecto_rolesproyecto", foreignKey: "idrolproyecto"});
  rolesproyectos.hasMany(usuarioproyecto, { as: "usuarioproyectos", foreignKey: "idrolproyecto"});
  usuarioproyecto.belongsTo(usuarios, { as: "nodocumento_usuario", foreignKey: "nodocumento"});
  usuarios.hasMany(usuarioproyecto, { as: "usuarioproyectos", foreignKey: "nodocumento"});

  return {
    facultades,
    fases,
    programas,
    proyectos,
    roles,
    rolesproyectos,
    tareas,
    usuarioproyecto,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
