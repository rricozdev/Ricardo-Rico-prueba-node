const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Tienda", {
        id: {
            type: DataTypes.SMALLINT,
            autoIncrement: true,
            primaryKey: true,
        },
        estado: {
            type: DataTypes.SMALLINT,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING(500),
            allowNull: true,
        },
        telefono: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        direccion: {
            type: DataTypes.STRING(120),
            allowNull: true,
        },
        direccion_anexo: {
            type: DataTypes.STRING(40),
            allowNull: true,
        },
        direccion_barrio: {
            type: DataTypes.STRING(25),
            allowNull: true,
        },
        calificacion: {
            type: DataTypes.DECIMAL(3, 2),
            allowNull: true,
        },
        calificacion_cantidad: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        impuestos: {
            type: DataTypes.SMALLINT,
            allowNull: true,
        },
        dias_trabajados: {
            type: DataTypes.STRING(21),
            allowNull: true,
        },
    },{
        timestamps: false,
    })
}