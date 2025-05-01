"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const writejfile_1 = require("../middleware/writejfile");
const loginRouter = (0, express_1.Router)();
exports.loginRouter = loginRouter;
loginRouter.get('/login', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../public/login.html'));
});
loginRouter.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }
        const users = yield (0, writejfile_1.readJsonFile)();
        const user = users.find((u) => u.email === email && u.password === password);
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        req.session.user = user;
        res.redirect('/profile.html');
    }
    catch (error) {
        res.status(500).json({ error: `Failed to process login request: ${error}` });
    }
}));
