const express = require('express');

const server = express();

const messages = new Map();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get('/', (req, res) => {
    const entries = Object.fromEntries(messages.entries());

    res.json(entries);
});

server.post('/', (req, res) => {
  const username = req.body.username;
  const message = req.body.message;
  const id = Date.now();

  messages.set(id, { username, message });

  res.status(201).json({ id });
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});