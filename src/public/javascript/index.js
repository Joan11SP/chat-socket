$(function(){
   const socket = io() 

   //obtener datos de la interface
   const $message_form=$('#message-form');
   const $message = $('#message');
   const $chat = $('#chat');

   const $userForm = $('#userForm');
   const $name = $('#name');
   const $userError= $('#userErro');


   //cancelar el evento del formulario 
   $message_form.submit(e=>{
       e.preventDefault()
       //llave para que se envie mensajes
       socket.emit('enviar mensaje',$message.val());
       $message.val('')
   })
   $userForm.submit(e=>{
    e.preventDefault();
    socket.emit('usuario',$name.val(),data=>{
        if(data){
            $('#userName').hide()
            $('#contentWrap').show()
        }
    })
})
   socket.on('nuevo mensaje',data=>{
       $chat.append('<b>'+data.user+'</b>' +': '+ data.mensaje + '<br>' )
   })
})