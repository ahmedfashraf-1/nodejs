import express, { text } from "express";
import { validateuser } from "../validation/validation";
import { validationResult } from "express-validator";
const router = express.Router();
// عرض صفحة التسجيل (لو بتستخدم view engine زي EJS)
router.get('/register', (req, res) => {
    res.render('index',{text:"hello"}); // لو عندك ملف views/register.ejs
});
// استقبال البيانات والتحقق منها
router.post('/register', validateuser(), (req: express.Request, res:any) => {
    console.log(req.body); // بيانات المستخدم المرسلة من الفورم
    const result = validationResult(req); // نتيجة الفاليديشن
    console.log(result);
    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }
    res.send(`Validations are done and name is ${req.body.username}`); 
});
export default router;