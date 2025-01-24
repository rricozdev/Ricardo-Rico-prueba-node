const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Promocion", {
        id: {
            type: DataTypes.MEDIUMINT.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        estado: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        imagen: {
            type: DataTypes.STRING(120),
            allowNull: true,
        },
        porcentaje: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: false,
        },
        dias_semana: {
            type: DataTypes.STRING(121),
            allowNull: false,
        },
    }, {
        timestamps: false,
    })
}