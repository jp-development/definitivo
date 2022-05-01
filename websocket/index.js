const express = require('express')
const app = express();
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server, {
    cors: {
        origin: '*'
    }
})



io.on('connection', (socket) => {
    console.log('Usuario conectado')
})



server.listen(8000, () => {
    console.log('Servidor corriendo en el puerto 8000')
})
