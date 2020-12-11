import express from 'express';
import ejsMate from 'ejs-mate';

const app = express();

// Middlewares
app.use(express.static("public"));

// Set View Engine
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

// Routes (temporary)
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('auth/login');
});

app.get('/signup', (req, res) => {
    res.render('auth/signUp');
});

const PORT = 3000;
app.listen(PORT, console.log(`Server is running on http://localhost:${PORT}`));