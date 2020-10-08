const {User} = require('./../models/user');

let auth = (req,res,next)=>{
    let token = req.cookies.auth;
    User.findByToken(token, (err,user)=>{
        if(err) throw err;
        if(!user) res.status(401).send('access denied')
        //res.status(200).send('access granted')
        req.token = token
        next()
    })
}

module.exports = {auth}