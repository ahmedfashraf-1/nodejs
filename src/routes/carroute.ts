import{cars,car}from'../modules/cars';
import { Router } from 'express';
const router1 = Router();
router1.get('/cars', (req, res) => {
    res.json(cars);
})
router1.post('/cars',(req, res) => {
    const { brand, model, Class } = req.body;
    const newCar = new car(brand, model, Class);
    cars.push(newCar);
    res.json(newCar);
})
router1.delete('/cars/:id', (req, res) => {
    const{id}=req.params;
    const findcar = cars.findIndex((x) => x.Class === Number(id));
    if(findcar === -1) {
        res.status(404).json({ message: 'Car not found' });
        return;
    }
    cars.splice(findcar, 1);
    res.send("car deleted successfully");
})
router1.get('/cars/:id', (req, res) => {
    // const{id}=req.params;
    // const findcar = cars.findIndex((x) => x.Class === Number(id));
    // if(findcar === -1) {
    //     res.status(404).json({ message: 'Car not found' });
    //     return;
    // }
    // res.json(cars[findcar]);
    const id=parseFloat(req.params.id);
    const car=cars[id];
    if(!car){
        res.status(404).json({message:'car not found'});
        return;
    }
    res.json(car);
})
export{router1};