"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRouter = void 0;
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const profileRouter = (0, express_1.Router)();
exports.profileRouter = profileRouter;
profileRouter.get('/profile', (req, res) => {
    const { username, email } = req.body;
    res.sendFile(path_1.default.join(__dirname, '../../public/profile.html'));
});
profileRouter.post('/profile', (req, res) => {
    res.redirect('/profile');
});
profileRouter.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});
