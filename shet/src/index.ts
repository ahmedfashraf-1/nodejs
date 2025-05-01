import express from 'express';
import path from 'path';
import session from 'express-session';
import { registerRouter } from './routes/register';
import { loginRouter } from './routes/login';
import { profileRouter } from './routes/profile';
import { homeRouter } from './routes/home';

const app = express();
const port = 8005;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use(session({
secret: 'Yarab_N3dy_El_Web',
resave: false,
saveUninitialized: false,
cookie: { 
    maxAge: 60000 
}
}));

// Declare session types
declare module 'express-session' {
interface SessionData {
    user?: {
    name: string;
    email: string;
    password: string;
    };
    authenticated?: boolean;
}
}

// Routes
app.use('/', homeRouter);
app.use('/', registerRouter);
app.use('/', loginRouter);
app.use('/', profileRouter);

app.listen(port, () => {
console.log(`Server running on http://localhost:${port}`);
});