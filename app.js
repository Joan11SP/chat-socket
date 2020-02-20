const express = require('express')
const app = express();
const socketio = require('socket.io')
const http =require('http')


const server = http.createServer(app)

const io = socketio.listen(server);
var port = process.env.PORT || 3000

require('./src/public/javascript/sockets')(io)

app.use(express.static(__dirname + '/src/public'))

server.listen(port,()=>{
    console.log('Iniciado ',port)
})