const express = require('express')
const router = express.Router()
const xlsx = require('xlsx')
const Adviser = require('../models/advisers')
const bcrypt = require('bcrypt')
const User = require('../models/users')
const Campaing = require('../models/campaing')



router.post('/', async (req, res) => {


    const stencil = xlsx.readFile('uploads/stencil.xlsx')

    let nameStencil = stencil.SheetNames

    let datosStencil = xlsx.utils.sheet_to_json(stencil.Sheets[nameStencil[0]])


    await Campaing.create({
        name: stencil.Props.Title,
        stencil: 'stencil.xlsx',
        pedidos: 'pedidos.xlsx'
    }).then(result => {
        datosStencil.map(async adviser => {
            await Adviser.create({
                name: adviser.__EMPTY_1,
                identification: adviser.__EMPTY,
            }).then(async adviser => {
                await Campaing.updateOne({
                    _id: result._id
                },{
                    $push: {
                        advisers : adviser._id
                    }
                })
            })
    
        })

        User.updateOne({
            _id: req.body.user
        }, {
            $push: {
                campaings: result._id
            }
        })
        
    })

    



    // const stencil = xlsx.readFile(
    //     '//home//jesuspineda//Escritorio//dev//chorders2//backend//stencil.xlsx'
    // )

    // const orders = xlsx.readFile(
    //     '//home//jesuspineda//Escritorio//dev//chorders2//backend//pedidos.xlsx'
    // )

    // let nameStencil = stencil.SheetNames
    // let nameOrders = orders.SheetNames

    // let datosStencil = xlsx.utils.sheet_to_json(stencil.Sheets[nameStencil[0]])
    // let datosOrders = xlsx.utils.sheet_to_json(orders.Sheets[nameOrders[0]])

    // const array = []
    // datosStencil.map(async stencil => {
    //     if (!datosOrders.some(d => d.Documento == stencil.__EMPTY)) {
    //         array.push(stencil)
    //     }
    // })

    // datosStencil.map(async user => {
    //     const hash = await bcrypt.hash(user.__EMPTY_1, 10);
    //     await Adviser.create({
    //         identification: user.__EMPTY,
    //         name: user.__EMPTY_1,
    //         password: hash,
    //         partner: 'Pcfika'
    //     }).then(async user2 => {
    //         await User.updateOne({

    //             _id: '624b9d4b4378f41ac3151945',
    //         }, {
    //             $push: { advisers: user2._id }
    //         })
    //     })
    // })

    // res.status(200)




}) 

router.post('/close', async (req, res, next) => {
    Campaing.updateOne({
        _id: req.body.id
    }, {
        active: false
    }).then(result => {
        res.status(200).json(result)
    })
})


//OBTENER LAS CAMPAÑAS DE CADA USUARIO

router.get('/', async (req, res, next) => {
    const fronted = req.body

    try{
        const campaings = await Campaing.find({})
        res.status(200).json(campaings)
    }catch{
        res.status(500).json({message: 'Error al tratar de realizar la peticion'})
    }


    
})


module.exports = router