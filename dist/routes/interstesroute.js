"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router2 = void 0;
const interstingss_1 = require("../modules/interstingss");
const express_1 = require("express");
const router2 = (0, express_1.Router)();
exports.router2 = router2;
router2.post('/new', (req, res) => {
    const { user, car } = req.body;
    const newInterest = new interstingss_1.Interest(user, car);
    interstingss_1.Interests.push(newInterest);
    res.json(newInterest);
});
router2.get('/:id', (req, res) => {
    const id = parseFloat(req.params.id);
    const interest = interstingss_1.Interests[id];
    if (!interest) {
        res.json({ message: 'car not found' });
        return;
    }
    res.json(interest);
});
