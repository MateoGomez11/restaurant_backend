require('./DataBase/sync.js');

const connection = require('./DataBase/connection.js');
const express = require('express');
const app = express();
const port = process.env.PORT || 1337;

//routers
const restaurantrouter = require('./Routers/restaurantrouter.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

connection.sync({force: false})
    .then(() => { 
        console.log('Base de datos sincronizada'); 
        app.listen(port, () => { 
            console.log("La aplicación está corriendo en el puerto: " + port);
        }) 
    })
    .catch((error) => { 
        console.error('Error al sincronizar la base de datos:', error); 
}); 

// api
app.use('/api', restaurantrouter);