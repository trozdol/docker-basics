const { NODE_ENV, PORT, DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } = process.env;

import express from 'express';
import cors from 'cors';

// ../

const server = express();
server.use(express.json({ limit: '50mb', extended: true }));
server.use(cors());
server.all('/', (req, res) => {
    res.send({
        path: req.baseUrl || '/',
        method: req.method,
        message: 'Hello World'
    });
});

// ../api

const api = express();
api.all('/', (req, res) => {
    res.send({
        path: req.baseUrl || '/',
        method: req.method,
        message: 'Hello World'
    });
});

server.use('/api', api);

server.listen(PORT, () => {

    console.table([
        NODE_ENV,
        PORT,
        DATABASE_HOST,
        DATABASE_PORT,
        DATABASE_USER,
        DATABASE_PASSWORD,
        DATABASE_NAME,
    ]);
    console.log(`Server listening on port port ${PORT}`);
});