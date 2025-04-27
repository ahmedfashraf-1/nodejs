import{users,user}from'../modules/users';
import { Router } from 'express';
const router3 = Router();
router3.get('/users:id', (req, res) => {
    const id=parseFloat(req.params.id);
        const user=users[id];
        if(!user){
            res.status(404).json({message:'car not found'});
            return;
        }
        res.json(user);
})
router3.delete('/users/:id', (req, res) => {
    const{id}=req.params;
        const finduser = users.findIndex((x) => x.age === Number(id));
        if(finduser === -1) {
            res.status(404).json({ message: 'Car not found' });
            return;
        }
        users.splice(finduser, 1);
        res.send("user deleted successfully");
})
export{router3};