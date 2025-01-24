const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Tienda_Promocion", {
        id: {
            type: DataTypes.MEDIUMINT.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        estado: {
            type: DataTypes.TINYINT.UNSIGNED,
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
            type: DataTypes.SMALLINT.UNSIGNED,
            allowNull: false,
        },
        id_promocion: {
            type: DataTypes.MEDIUMINT.UNSIGNED,
            allowNull: false,
        },
    }, {
        timestamps: false,
    });
};