require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controller')

const app = express()

app.use(express.json())

const {CONNECTION_STRING, SERVER_PORT} = process.env

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set("db", db)
    console.log('Database is connected')
})
.catch(err => console.log(err));

app.get('/api/inventory', ctrl.getProduct)
app.post('/api/products', ctrl.addProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)
/* app.put('/api/product/:id', ctrl.editProduct) */


app.listen(SERVER_PORT, () => console.log(`Port running on ${SERVER_PORT}`));