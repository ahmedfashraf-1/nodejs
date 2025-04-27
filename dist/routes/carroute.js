"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router1 = void 0;
const cars_1 = require("../modules/cars");
const express_1 = require("express");
const router1 = (0, express_1.Router)();
exports.router1 = router1;
router1.get('/cars', (req, res) => {
    res.json(cars_1.cars);
});
router1.post('/cars', (req, res) => {
    const { brand, model, Class } = req.body;
    const newCar = new cars_1.car(brand, model, Class);
    cars_1.cars.push(newCar);
    res.json(newCar);
});
router1.delete('/cars/:id', (req, res) => {
    const { id } = req.params;
    const findcar = cars_1.cars.findIndex((x) => x.Class === Number(id));
    if (findcar === -1) {
        res.status(404).json({ message: 'Car not found' });
        return;
    }
    cars_1.cars.splice(findcar, 1);
    res.send("car deleted successfully");
});
router1.get('/cars/:id', (req, res) => {
    // const{id}=req.params;
    // const findcar = cars.findIndex((x) => x.Class === Number(id));
    // if(findcar === -1) {
    //     res.status(404).json({ message: 'Car not found' });
    //     return;
    // }
    // res.json(cars[findcar]);
    const id = parseFloat(req.params.id);
    const car = cars_1.cars[id];
    if (!car) {
        res.status(404).json({ message: 'car not found' });
        return;
    }
    res.json(car);
});
