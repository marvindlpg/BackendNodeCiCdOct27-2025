const express = require ('express');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');

const app =  express(); 

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req,res) =>{ 
    res.send('Ejemplo running Oct 28-2025 JOSEPH MARVIN DE LA PEÑA DIAZ'); 
}); 


app.use('/api', apiRouter);



app.listen (3000, () => {
   console.log('Servidor runners');
});

