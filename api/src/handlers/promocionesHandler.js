const { getPromocionesByDia } = require("../controllers/promocionesController");


const getPromocionesByDiaHandler = async (req, res) => {
    try {
        const { dia } = req.query;

        if (isNaN(dia) || dia < 0 || dia > 6) {
            return res.status(400).json({ 
                error: "El día debe ser un número entre 0 y 6"
            });
        }
        const response = await getPromocionesByDia(dia);

        res.status(200).json({
            message: "Consultando correctamente",
            data: response
        })
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};


module.exports ={ 
    getPromocionesByDiaHandler
};