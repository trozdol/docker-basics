import express from 'express';


// http://backend/api

const api = express();

api.all('/', (req, res) => {
    res.send({
        path: req.path,
        method: req.method,
        message: 'Hello World'
    });
});


// http://backend/

const server = express();

server.all('/', (req, res) => {
    res.send({
        path: req.path,
        method: req.method,
        message: 'Hello World'
    });
});

server.use('/api', api);

server.listen(80, () => {
    console.log(`Server listening on port http://backend:80`);
    
    const { NODE_ENV, PORT, DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } = process.env;

    console.table([
        NODE_ENV,
        PORT,
        DATABASE_HOST,
        DATABASE_PORT,
        DATABASE_USER,
        DATABASE_PASSWORD,
        DATABASE_NAME,
    ]);
});