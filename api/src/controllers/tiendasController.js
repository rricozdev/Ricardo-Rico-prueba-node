const { Producto, Producto_Stock, Tienda } = require("../db");


// Post
const createTienda = async (estado, nombre) => {
    try {
        const nuevaTienda = await Tienda.create({ estado, nombre });    
        return nuevaTienda;        
    } catch (error) {
        throw new Error(`Error al crear la tienda : ${error.message}`)        ;
    };
};


// Post - 
const asociarProductoATienda = async (cantidad, id_tienda, idProducto) => {
    try {
        const tienda = await Tienda.findByPk(id_tienda);
        console.log("tienda:", tienda);
        
        const producto = await Producto.findByPk(idProducto);
        console.log("producto:", producto);
        

        if (!tienda) {
            throw new Error("La tienda no existe");
        }

        if (!producto) {
            throw new Error("El producto no existe");
        }

        const productStock = await Producto_Stock.create({
            cantidad,
            id_tienda: id_tienda,
            id_producto: idProducto,
            fecha_ingreso: new Date(),
        });

        return productStock;
    } catch (error) {
        throw new Error(`Error al asociar el producto a la tienda: ${error.message }`);
    }
};

// Get - obtener todas las tiendas
const getAllTiendas = async () => {
    try {
        const tiendas = await Tienda.findAll({
            include: {
                model: Producto_Stock
            }
        });

        return tiendas;
    } catch (error) {
        throw new Error(`Error al obtener las tiendas : ${error.message}`);
    };
};


module.exports = {
    createTienda,
    getAllTiendas,
    asociarProductoATienda
}