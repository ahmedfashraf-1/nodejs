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
exports.registerRouter = void 0;
const express_1 = require("express");
const validationuser_1 = require("../middleware/validationuser");
const express_validator_1 = require("express-validator");
const writejfile_1 = require("../middleware/writejfile");
const user_1 = require("../modules/user");
const path_1 = __importDefault(require("path"));
const registerRouter = (0, express_1.Router)();
exports.registerRouter = registerRouter;
registerRouter.get('/register', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../public/register.html'));
});
registerRouter.post('/register', (0, validationuser_1.validateUser)(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check validation result
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { username, email, password } = req.body;
        const newUser = new user_1.User(username, email, password); // username will map to name in User class
        yield (0, writejfile_1.writeJsonFile)(newUser); // Write the new user
        res.redirect('login');
    }
    catch (error) {
        res.status(500).json({ error: `Failed to register user: ${error}` });
    }
}));
