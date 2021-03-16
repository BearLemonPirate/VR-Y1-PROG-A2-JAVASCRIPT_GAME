//first time server setup running at localhost:3000

const hostname = '127.0.0.1';

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('Public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT,);
console.log(`Server listening on port: ${PORT}`);