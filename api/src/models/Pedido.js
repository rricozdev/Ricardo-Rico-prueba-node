const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Pedido", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        instrucciones: {
            type: DataTypes.STRING(500),
            allowNull: true,
        },
        entrega_fecha: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        valor_productos: {
            type: DataTypes.DECIMAL(12, 3).UNSIGNED,
            allowNull: false,
        },
        valor_envio: {
            type: DataTypes.DECIMAL(10, 3).UNSIGNED,
            allowNull: false,
        },
        valor_descuento: {
            type: DataTypes.DECIMAL(12, 3).UNSIGNED,
            allowNull: false,
        },
        valor_cupon: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        valor_impuestos: {
            type: DataTypes.DECIMAL(11, 3),
            allowNull: false,
        },
        valor_final: {
            type: DataTypes.DECIMAL(12, 3).UNSIGNED,
            allowNull: false,
        },
        calificacion: {
            type: DataTypes.DECIMAL(3, 2),
            allowNull: true,
        }, 
        id_tienda: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING(160),
            allowNull: false,
        },
        valor_comision: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
    },{
        timestamps: false,
    })
}