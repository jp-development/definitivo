const express = require('express')
const bcrypt = require('bcrypt')
const Advisers = require('../models/advisers')
const User = require('../models/users')
const router = express.Router()


//OBTENER TODOS LOS ASESORES 


router.get('/', async (req, res, next) => {
    try {
        const users = await Advisers.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({message: 'Error al tratar de hacer la peticion', error: error})
    }
})


// CREACION DE NUEVOS ASESORES

router.post('/', async (req, res, next) => {
    const fronted = req.body
    
    const hash = await bcrypt.hash(fronted.password, 10);

    const newUser = await Advisers.create({
        name: fronted.name,
        identification: fronted.identification,
        password: hash,
        partner: fronted.partner
    })
    if(!newUser) {
        res.status(400).json({ message:'No se ha podido hacer la creacion del usuario'})
    }
    await User.updateOne({_id: fronted.user},{
        $push: {advisers: newUser._id}
    })

    res.status(201).json(newUser)
})

// OBTENER ASESORES DEPENDIENDO DEL USUARIO

router.post('/getuser', async (req, res)=>{
    try {
        const user = await User.findById(req.body.id)
        const youAdvisers = await Promise.all(
            user.advisers.map((adviserId) => {
                return Advisers.findById(adviserId)
            })
        )

        let advisersList = []
        youAdvisers.map((advisers) => {
            const {_id, name, identification} = advisers
            advisersList.push({_id, name, identification})
        })

        res.status(200).json(advisersList)
    } catch (error) {
        
    }
})


module.exports = router