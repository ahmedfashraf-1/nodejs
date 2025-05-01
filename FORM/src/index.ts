import express from 'express';
import path from 'path';
import router from './routes/user';
const app = express();
const port = 4004;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine setup
app.set('view engine', 'ejs'); // هيدور علي ملف اسمه index.ejs في مجلد views  وهيعرضه علي الصفحه ساعتها انه ejs 
app.set('views', path.join(__dirname, 'views')); // دور علي الملف دي جوا فولدر اسمه views

// Routes
app.use('/', router);

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});