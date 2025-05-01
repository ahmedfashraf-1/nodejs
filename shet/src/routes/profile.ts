import { Router } from 'express';
import path from 'path';
import { User } from '../modules/user';
const profileRouter = Router();

profileRouter.get('/profile', (req, res) => {
    const { username, email } = req.body;

    res.sendFile(path.join(__dirname, '../../public/profile.html'));
});

profileRouter.post('/profile', (req, res) => {
    res.redirect('/profile');
});

profileRouter.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

export { profileRouter };