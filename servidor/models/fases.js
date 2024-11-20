const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fases', {
    idfase: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fase: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    estadofase: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    idproyecto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'proyectos',
        key: 'idproyecto'
      }
    }
  }, {
    sequelize,
    tableName: 'fases',
    timestamps: false
  });
};
