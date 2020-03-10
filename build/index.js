import express from 'express';
const PORT = 5000;
const HOST = 'localhost';
const app = express();
app.get('/', (req, res) => {
    res.send('hello from ts!');
});
app.listen(PORT, HOST, () => {
    console.log(`listening on: ${HOST}:${PORT}`);
});
