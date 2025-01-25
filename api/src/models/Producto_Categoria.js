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
            references: {
                model: "Categoria",
                key: "id"
            }
        },
        id_producto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Productos",
                key: "id",
            }
        },
    },{
        tableName: "Producto_Categoria",
        timestamps: false,
    })
}