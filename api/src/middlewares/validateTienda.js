const validateTienda = (req, res, next) => {
    const { estado, nombre } = req.body;

    const requiredProperties = {
        estado: "requerido",
        nombre: "requerido"
    };

    const errors = [];

    if (estado === undefined || estado === null || typeof estado !== "number") {
        errors.push(requiredProperties.estado);
    }

    if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
        errors.push(requiredProperties.nombre);
    };

    if (errors.length > 0) {
        return res.status(400).json({ error: errors.join(" ")});
    };

    next();
};


module.exports = validateTienda;