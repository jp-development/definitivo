const express = require('express')
const router = express.Router()
const User = require('../models/users')
const bcrypt = require('bcrypt')
const Advisers = require('../models/advisers')

//INICIO DE SESION PARA GERENTES DE ZONA

router.post('/login', (req, res) => {

    const fronted = req.body

    User.findOne({ identification: fronted.identification }, (error, user) => {
        if (error) {
            res.status(500).json({ message: 'Error al intentar hacer la peticion' })
        } else if (!user) {
            res.status(500).json({ message: 'El usuario no existe' })
        } else {
            bcrypt.compare(fronted.password, user.password, (err, result) => {
                if (err) {
                    res.status(500).json({ message: 'Error al intentar hacer la peticion' })
                } else if (result) {
                    res.status(200).json({ user: user, login: true })
                } else {
                    res.status(500).json({ message: 'Contraseña incorrecta' })
                }
            })
        }
    })

})

router.post('/adviser', (req, res) => {
    Advisers.findOne({ identification: req.body.identification}, (error, user) => {
        if(error){
            res.status(500).json({ message: 'Error al intentar hacer la peticion' })
        }else if (!user) {
            res.status(500).json({ message: 'El usuario no existe'})
        }else{
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) {
                    res.status(500).json({ message: 'Error al intentar hacer la peticion' })
                } else if (result) {
                    res.status(200).json({ user: user, login: true })
                } else {
                    res.status(500).json({ message: 'Contraseña incorrecta' })
                }
            })
        }

    })
})


module.exports = router