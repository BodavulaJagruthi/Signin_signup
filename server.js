const express = require('express');
const app = express();
const path = require('path');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.get('/sign-in', (req, res) => {
    res.sendFile(path.join(__dirname, 'sign-in.html'));
});
app.post('/sign-in', (req, res) => {
    const { username, password } = req.body;
    res.send(`Welcome, ${username}!`);
});
app.get('/sign-up', (req, res) => {
    res.sendFile(path.join(__dirname, 'sign-up.html'));
});
app.post('/sign-up', (req, res) => {
    const { username, email, password } = req.body;
    res.send(`Account created for ${username}!`);
});
app.use(express.static(path.join(__dirname, 'public')));