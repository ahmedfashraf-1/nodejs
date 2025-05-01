import { Router, Request, Response } from 'express';
import path from 'path';
import { User } from '../modules/user';
import { readJsonFile } from '../middleware/writejfile';

const loginRouter = Router();

loginRouter.get('/login', (req: Request, res: Response) => {
res.sendFile(path.join(__dirname, '../../public/login.html'));
});

loginRouter.post('/login', async (req: any, res: any) => {
try {
    const { email, password } = req.body;

    if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
    }

    const users: User[] = await readJsonFile();
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
    }

    req.session.user = user;
    res.redirect('/profile.html');
} catch (error) {
    res.status(500).json({ error: `Failed to process login request: ${error}` });
}
});

export { loginRouter };