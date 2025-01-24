const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Producto_Stock", {
        id: {
            type: DataTypes.MEDIUMINT.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        cantidad: {
            type: DataTypes.DECIMAL(8, 3),
            allowNull: false,
        },
        id_tienda: {
            type: DataTypes.SMALLINT.UNSIGNED,
            allowNull: false,
        },
        id_producto: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        fecha_ingreso: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },{
        timestamps: false,
    })
}