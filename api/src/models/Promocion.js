const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Promocion", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        estado: {
            type: DataTypes.SMALLINT,
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
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        dias_semana: {
            type: DataTypes.STRING(121),
            allowNull: false,
        },
    }, {
        tableName: "Promocions",
        timestamps: false,
    })
}