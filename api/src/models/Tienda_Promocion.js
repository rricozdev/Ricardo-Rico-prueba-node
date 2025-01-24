const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Tienda_Promocion", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        estado: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        inicio: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        fin: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        id_tienda: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        id_promocion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false,
    });
};