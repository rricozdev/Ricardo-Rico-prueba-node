const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Producto_Categoria", {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        id_categoria: {
            type: DataTypes.SMALLINT.UNSIGNED,
            allowNull: false,
        },
        id_producto: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
    },{
        timestamps: false,
    })
}