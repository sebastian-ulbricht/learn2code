const express = require('express');

const app = express();

const messages = new Map();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const entries = Object.fromEntries(messages.entries());

    res.json(entries);
});

app.post('/', (req, res) => {
    const username = req.body.username;
    const message = req.body.message;
    const id = Date.now();

    messages.set(id, { username, message });

    res.status(201).json({id});
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});