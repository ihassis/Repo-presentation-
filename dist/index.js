"use strict";
/**const express = require('express');
const { getUser } = require('./controllers/user');

const app = express(); // j'ai crée ma premiere application / serveur
app.get('/user', getUser); // j'ai crée ma premiere route http get
// si l'utilisateur visite http://localhost:3000/user getUser est executé

app.listen(3000, () => console.log('Server running on 3000'));*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("./controllers/user");
const app = (0, express_1.default)();
app.get('/user', user_1.getUser);
app.listen(3000, () => console.log('Server running on 3000'));
//# sourceMappingURL=index.js.map