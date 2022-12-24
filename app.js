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
    res.send('<div align="center"><h1><font size="15">Error404.</font></h1><p>Estamos trabajando para mejorar la experiencia.</p><p>Contacto en el home page del sitio web.</p><p>Volver a la pagina principal de <a href="/">Mercado Liebre</a></div>')
})
app.get('/producto-detalle',(req,res)=>{
    res.sendFile(path.join(__dirname,"views/detalle.html"))
});
app.get('/registrar',(req,res)=>{
    res.sendFile(path.join(__dirname,"views/registrar.html"))
});
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,"views/login.html"))
});