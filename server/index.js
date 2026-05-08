const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

io.on('connection', (socket) => {
    console.log("Alguien se conecto")
    // Mensajes a todos
    socket.emit("bienvenida", "Bienvenido maquina fiera mastodonte tornillito")
    socket.on("mensaje", (mensaje) => {
        console.log(mensaje)
    })

} )

server.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
})

