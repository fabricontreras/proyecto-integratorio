const { Router } = require("express");
const { favs } = require("../utils/favs");
const favsRouters = Router();

favsRouters.post("/create", (req, res) => {
    favs.push({...req.body})
    res.status(201).json({msg:'Guardado exitoso', data: favs})
});

favsRouters.get('/get', (req, res) => {
    return res.json(favs)
})

favsRouters.delete('/delete/:id',(req, res) => {
    const { id } = req.params
    const delet = favs.filter(del => del.id !== id)
    return res.status(201).json(delet)
})
module.exports = favsRouters