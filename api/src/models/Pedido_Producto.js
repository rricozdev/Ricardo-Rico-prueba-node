const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Pedido_Producto", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        cantidad: {
            type: DataTypes.DECIMAL(9, 3),
            allowNull: false,
        },
        valor_unitario: {
            type: DataTypes.DECIMAL(11, 3).UNSIGNED,
            allowNull: false,
        },
        valor_unitario_promocion: {
            type: DataTypes.DECIMAL(11, 3).UNSIGNED,
            allowNull: true,
        },
        total_teorico: {
            type: DataTypes.DECIMAL(12, 3).UNSIGNED,
            allowNull: false,
        }, 
        total_final: {
            type: DataTypes.DECIMAL(12, 3).UNSIGNED,
            allowNull: false,
        },
        id_promocion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_producto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_pedido: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },{
        timestamps: false,
    })
}