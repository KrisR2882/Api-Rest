let bikesInfo = [
    {
        id: 1,
        marca: "Yamaha",
        modelo: "Fz-S",
        año: 2021,
        color: "Azul-Negro",
        kilometraje: 200
    },
    {
        id: 2,
        marca: "KTM",
        modelo: "Duke 390-NG",
        año: 2023,
        color: "Negro-Naranja",
        kilometraje: 180
    },
    {
        id: 3,
        marca: "Kawasaki",
        modelo: "Ninja 400",
        año: 2024,
        color: "Verde Kawasaki",
        kilometraje: 0
    },
    {
        id: 4,
        marca: "BMW",
        modelo: "S1000RR",
        año: 2025,
        color: "Negra-Paquete-M",
        kilometraje: 1000
    }
]

const getBikes = (req, res) => {
    res.status(200).json(bikesInfo)
}

const getBikesById = (req, res) => {
    const idBike = parseInt(req.params.id);
    const bike = bikesInfo.find(bike => bike.id === idBike);
    if (bike) {
        res.send(bike);
    } else {
        res.status(404).send('Motocicleta no encontrada');
    }
};

const postBike = (req, res) => {
    const { id, marca, modelo, año, color, kilometraje } = req.body
    bikesInfo.push({ id, marca, modelo, año, color, kilometraje })
    res.send('Motocicleta añadida satisfactoriamente')
}

const deleteBike = (req, res) => {
    const idBike = parseInt(req.params.id);
    const index = bikesInfo.findIndex(bike => bike.id === idBike);
    if (index !== -1) {
        bikesInfo.splice(index, 1);
        res.send("Motocicleta eliminada satisfactoriamente");
    } else {
        res.status(404).send('Motocicleta no encontrada');
    }
};

const putBike = (req, res) => {
    const idBike = parseInt(req.params.id);
    const { marca, modelo, año, color, kilometraje } = req.body;

    const index = bikesInfo.findIndex(bike => bike.id === idBike);
    if (index !== -1) {
        bikesInfo[index] = { id: idBike, marca, modelo, año, color, kilometraje };
        res.send('Motocicleta actualizada satisfactoriamente');
    } else {
        res.status(404).send('Motocicleta no encontrada');
    }
};

module.exports = {
    getBikes,
    getBikesById,
    postBike,
    deleteBike,
    putBike
}