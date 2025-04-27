"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const carroute_1 = require("./routes/carroute");
const interstesroute_1 = require("./routes/interstesroute");
const userroute_1 = require("./routes/userroute");
const app = (0, express_1.default)();
app.use('/car', carroute_1.router1);
app.use('/user', interstesroute_1.router2);
app.use('/interest', userroute_1.router3);
app.listen(1234, () => {
    console.log('Server is running on port 3000');
});
