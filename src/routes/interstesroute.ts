import{users,user}from'../modules/users';
import{cars,car}from'../modules/cars';
import{Interests,Interest}from'../modules/interstingss';
import { Router } from 'express';
const router2 = Router();
router2.post('/new', (req, res) => {
    const { user, car } = req.body;
    const newInterest = new Interest(user, car);
    Interests.push(newInterest);
    res.json(newInterest);
})
router2.get('/:id', (req, res) => { 
    const id=parseFloat(req.params.id);
    const interest=Interests[id];
    if(!interest){
        res.json({message:'car not found'});
        return;
    }
    res.json(interest);
})
export{router2};