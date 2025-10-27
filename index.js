const express = require ('express');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');

const app =  express(); 

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req,res) =>{ 
    res.send('Ejemplo running Oct 27-2025'); 
}); 


app.use('/api', apiRouter);



app.listen (3001, () => {
   console.log('Servidor runners');
});

