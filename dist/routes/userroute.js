"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router3 = void 0;
const users_1 = require("../modules/users");
const express_1 = require("express");
const router3 = (0, express_1.Router)();
exports.router3 = router3;
router3.get('/users:id', (req, res) => {
    const id = parseFloat(req.params.id);
    const user = users_1.users[id];
    if (!user) {
        res.status(404).json({ message: 'car not found' });
        return;
    }
    res.json(user);
});
router3.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const finduser = users_1.users.findIndex((x) => x.age === Number(id));
    if (finduser === -1) {
        res.status(404).json({ message: 'Car not found' });
        return;
    }
    users_1.users.splice(finduser, 1);
    res.send("user deleted successfully");
});
