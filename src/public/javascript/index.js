$(function(){
   const socket = io() 

   //obtener datos de la interface
   const $message_form=$('#message-form');
   const $message = $('#message');
   const $chat = $('#chat');

   const $userForm = $('#userForm');
   const $name = $('#name');
   const $userError= $('#userErro');
   const $users = $('#usernames')


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
       $chat.append(`${data.envioFecha} ` +'<b>'+data.user+'</b>' +': '+ data.mensaje +  '<br>' )
   })
   socket.on('usernames', data => {
    let html = '';
    for(i = 0; i < data.length; i++) {
      html += `<p>${data[i]}</p>`; 
    }
    $users.html(html);
  });
})