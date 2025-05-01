"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_session_1 = __importDefault(require("express-session"));
const register_1 = require("./routes/register");
const login_1 = require("./routes/login");
const profile_1 = require("./routes/profile");
const home_1 = require("./routes/home");
const app = (0, express_1.default)();
const port = 8005;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use((0, express_session_1.default)({
    secret: 'Yarab_N3dy_El_Web',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}));
// Routes
app.use('/', home_1.homeRouter);
app.use('/', register_1.registerRouter);
app.use('/', login_1.loginRouter);
app.use('/', profile_1.profileRouter);
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
