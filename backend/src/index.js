const express = require('express');
const routes = require('cors')
const routes = require('./routes')

const app= express();


app.use(cous());
app.use(express.json());
app.use(routes);


app.listen(3333);