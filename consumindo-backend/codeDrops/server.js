//  Criar a rota para acessar a API
const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');

app.use(cors());

// Servir a API
app.get('/', async (req, res) => {

    try {
        // response é a resposta do axios, mas eu tiro o data de dentro do response
        const {data} = await axios("https://jsonplaceholder.typicode.com/users");
        return res.json(data);
    } catch (error) {
        console.error(error);
    }
    

    // Consumindo a API
    // return res.json([
    //     { name: 'Seu Madruga' },
    //     { name: 'Chaves' }
    // ])

})

app.listen('4567');