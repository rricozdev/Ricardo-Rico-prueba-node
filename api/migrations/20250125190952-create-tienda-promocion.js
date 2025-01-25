"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Tienda_Promociones", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_tienda: {
        type: Sequelize.INTEGER,
        references: {
          model: "Tiendas", // Nombre de la tabla Tienda
          key: "id", // Columna a la que hace referencia
        },
        onUpdate: "CASCADE", // Actualizar en cascada
        onDelete: "CASCADE", // Eliminar en cascada
      },
      id_promocion: {
        type: Sequelize.INTEGER,
        references: {
          model: "Promociones", // Nombre de la tabla Promocion
          key: "id", // Columna a la que hace referencia
        },
        onUpdate: "CASCADE", // Actualizar en cascada
        onDelete: "CASCADE", // Eliminar en cascada
      },
      inicio: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      fin: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("Tienda_Promociones");
  },
};