const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, "public")))

app.listen(8000, ()=>{
    console.log('En linea');
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"views/home.html"))
});
app.get('/error', (req,res)=>{
    res.send('<h1>Error404.</h1><p>Lo sentimos el sitio no esta disponible.</p><p>Contacto en el home page del sitio web.</p><p>Volver a la pagina principal.</p>')
})
