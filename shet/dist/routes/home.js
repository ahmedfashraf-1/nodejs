"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRouter = void 0;
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const homeRouter = (0, express_1.Router)();
exports.homeRouter = homeRouter;
homeRouter.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../public/home.html'));
});
homeRouter.get('/check-session', (req, res) => {
    if (req.session.user) {
        res.json({ username: req.session.user.name, email: req.session.user.email });
    }
    else {
        res.json({});
    }
});
