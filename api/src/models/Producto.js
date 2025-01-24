const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Producto", {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        estado: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: false,
        },
        kit: {
            type: DataTypes.TINYINT.UNSIGNED,
            allowNull: false,
        },
        barcode: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        presentacion: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        foto: {
            type: DataTypes.STRING(120),
            allowNull: true,
        },
        peso: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: true,
        },
    },{
        timestamps: false,
    })
}