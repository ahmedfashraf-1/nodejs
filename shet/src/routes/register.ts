import { Router, Request, Response } from 'express';
import { validateUser } from '../middleware/validationuser';
import { validationResult } from 'express-validator';
import { writeJsonFile } from '../middleware/writejfile';
import { User } from '../modules/user';
import path from 'path';

const registerRouter = Router();

registerRouter.get('/register', (req: Request, res: Response) => {
res.sendFile(path.join(__dirname, '../../public/register.html'));
});

registerRouter.post('/register', validateUser(), async (req: any, res: any) => {
try {
    // Check validation result
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;
    const newUser = new User(username, email, password); // username will map to name in User class
    await writeJsonFile(newUser); // Write the new user
    res.redirect('login');
} catch (error) {
    res.status(500).json({ error: `Failed to register user: ${error}`});
}
});

export { registerRouter };