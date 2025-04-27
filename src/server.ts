import express from 'express';
import { router1 } from './routes/carroute';
import{ router2 } from './routes/interstesroute';
import { router3 } from './routes/userroute';
const app = express();
app.use(express.json());
app.use('/car',router1);
app.use('/user',router2);
app.use('/interest',router3);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
