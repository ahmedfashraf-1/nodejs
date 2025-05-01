"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validation_1 = require("../validation/validation");
const express_validator_1 = require("express-validator");
const router = express_1.default.Router();
// عرض صفحة التسجيل (لو بتستخدم view engine زي EJS)
router.get('/register', (req, res) => {
    res.render('index', { text: "hello" }); // لو عندك ملف views/register.ejs
});
// استقبال البيانات والتحقق منها
router.post('/register', (0, validation_1.validateuser)(), (req, res) => {
    console.log(req.body); // بيانات المستخدم المرسلة من الفورم
    const result = (0, express_validator_1.validationResult)(req); // نتيجة الفاليديشن
    console.log(result);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }
    res.send(`Validations are done and name is  + ${req.body.username}`);
});
exports.default = router;
