const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Producto_Stock", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        cantidad: {
            type: DataTypes.DECIMAL(8, 3),
            allowNull: false,
        },
        id_tienda: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        id_producto: {
            type: DataTypes.INTEGER,
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