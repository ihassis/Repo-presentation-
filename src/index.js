const express = require('express');
const { getUser } = require('./controllers/user');

const app = express(); // j'ai crée ma premiere application / serveur
app.get('/user', getUser); // j'ai crée ma premiere route http get 
// si l'utilisateur visite http://localhost:3000/user getUser est executé

app.listen(3000, () => console.log('Server running on 3000'));
