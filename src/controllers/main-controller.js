
module.exports = {
    home: (req,res)=>{
        res.render('home')
    },
    registrar: (req, res)=>{
        res.render('registrar')
    },
    login: (req,res)=>{
        res.render('login')
    },
    detalle: (req,res)=>{
        res.render('detalle')
    }
};