import express from 'express';

const app = express();

app.get('/test', (request, response) => {
    return response.send('Ola NLW');
});

app.post('/test', (request, response) => {
    return response.send('Ola NLW metodo POST');
});

app.listen(3333, () => console.log('Server is running')) ;