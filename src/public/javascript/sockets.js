module.exports=(io)=>{
    var names=[]
    io.on('connection',socket=>{
        console.log('new user connected')

        //receptar mensjaes
        socket.on('enviar mensaje',data=>{
            //reenviar mensaje
            var fecha = new Date()
            var hora = fecha.getHours()
            var min = fecha.getMinutes()
            var envio=`${hora}:${min}`
            io.sockets.emit('nuevo mensaje',{
                envioFecha:envio,
                mensaje:data,
                user:socket.name
            })
        })
        socket.on('usuario',(data,callback)=>{
            if(names.indexOf(data)==-1){
                callback(true)
                socket.name=data
                names.push(socket.name)
                io.sockets.emit('usernames',names)
            }
            
        })        
    })
}