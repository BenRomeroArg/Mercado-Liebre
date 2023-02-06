const usersModel = [{id: 1, nombre:"r"},{id:2,nombre:"t"},{id:3,nombre:"u"}]
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
    },
    store: (req,res)=>{
        let user = req.body;
        let userId = usersModel.create(user)
        res.redirect('/users/'+userId);
    }

};