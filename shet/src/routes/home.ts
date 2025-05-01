import { Router, Request, Response } from 'express';
import path from 'path';

const homeRouter = Router();

homeRouter.get('/', (req: Request, res: Response) => {
res.sendFile(path.join(__dirname, '../../public/home.html'));
});

homeRouter.get('/check-session', (req: Request, res: Response) => {
if (req.session.user) {
    res.json({ username: req.session.user.name, email: req.session.user.email });
} else {
    res.json({});
}
});

export { homeRouter };