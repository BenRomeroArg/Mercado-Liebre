const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routers/main-router');
app.use(express.static(path.join(__dirname, "../public")));
const PORT = process.env.PORT || 8000; //variable de entorno

app.listen(PORT, ()=>{
    console.log(`En linea puerto ${PORT}`);
});
//plantilla 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(mainRouter);