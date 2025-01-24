const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Producto_Categoria", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_categoria: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        id_producto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },{
        timestamps: false,
    })
}