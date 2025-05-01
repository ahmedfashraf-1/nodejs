"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
const port = 4004;
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// View engine setup
app.set('view engine', 'ejs'); // هيدور علي ملف اسمه index.ejs في مجلد views  وهيعرضه علي الصفحه ساعتها انه ejs 
app.set('views', path_1.default.join(__dirname, 'views')); // دور علي الملف دي جوا فولدر اسمه views
// Routes
app.use('/', user_1.default);
// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
