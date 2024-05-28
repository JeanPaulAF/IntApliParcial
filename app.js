const express = require('express')

const config = require('./public/scripts/config')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.get('/inicio', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/nosotros', (req, res) => {
    res.sendFile(__dirname + '/public/nosotros.html')
})

app.get('/politicas', (req, res) => {
    res.sendFile(__dirname + '/public/politicas.html')
})

app.get('/menu', (req, res) => {
    res.sendFile(__dirname + '/public/menu.html')
})

app.get('/contacto', (req, res) => {
    res.sendFile(__dirname + '/public/contacto.html')
})

app.use(express.static('public'))
module.exports = app;

if (require.main === module) {
    const PORT = 8000;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
}

app.listen(config.port, () => {
    console.log(`Servidor corriendo en el puerto ${config.port}, http://localhost:3000`)
})

 