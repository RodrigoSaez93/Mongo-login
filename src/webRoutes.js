const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
    res.render("login");
})


router.post("/login", (req, res) => {
    req.session.nombre = req.body.nombre;
    res.redirect("/productos/ingresar");
})

router.get("/logout", (req, res) => {
    const data = { nombre: req.session.nombre};
    req.session.destroy();
    res.render("logout", data)
})

module.exports = router;