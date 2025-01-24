const validateProducto = (req, res, next) => {
    const {estado, kit, barcode, nombre, presentacion} = req.body;

    const requiredProperties = {
        estado: "Estado es requerido", 
        kit: "Kit es requerido", 
        barcode: "Barcode es requerido", 
        nombre: "Nombre es requerido", 
        presentacion: "Presentación es requerida", 
    };

    // verificamos si falta alguna key
    const missingProperties = Object.keys(requiredProperties).filter((prop) => req.body[prop] === undefined || req.body[prop] === null);

    // Si falta alguna manejamos el error
    if (missingProperties.length > 0) {
        const errorMessage = missingProperties.map((prop) => requiredProperties[prop]).join(", ");
        return res.status(400).json({ error: `Faltan propiedades: ${errorMessage}`});
    };

    // Si todas las keys requeridas están presentes, continuamos con el siguiente middleware
    next();
};


module.exports = validateProducto;