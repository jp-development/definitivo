  const express = require('express');
const router = express.Router();
const User = require('../models/users')
const bcrypt = require('bcrypt')

// OBETENER USUARIOS REGISTRADOS
router.get('/', async (req, res, next) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(404).json({message:'Error al tratar de hacer la peticion', error: error})
  }
});

//CREAR NUEVO USUARIO

router.post('/', async (req, res)=> {
 
    bcrypt.hash( req.body.password , 10).then(hash => {
      User.create({
        name: req.body.name,
        identification: req.body.identification,
        password: hash
      }).then(response =>{
        res.status(201).json(response)
      })
    })
})

// ELIMINAR UN USUARIO

router.delete('/:id', (req, res) => {
  try {
    User.deleteOne({
      _id: req.params.id
    }).then(response => {
      res.status(200).json({message: 'El usuario fue eliminado con exito', response: response})
    })
  } catch (error) {
    res.status(404).json({message: 'Error al tratar de hacer la peticion', error: error})
  }
})

module.exports = router;
