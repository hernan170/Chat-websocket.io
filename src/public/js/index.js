console.log('Conectado al socket server')
const socket = io(); //Establece la conexion desde el cliente hacia el server.
const box = document.querySelector('#box')
const app = document.querySelector('#app-chat')
const teclaEnter = 'Enter'

//--socket.emit('mensaje', 'Buenas servidor te saludo desde el cliente')
//socket.on('respuesta_mensaje', (data) => {
    //console.log('Respuesta del servidor:', data)
//})
let user = '';

Swal.fire({
    title: 'Quien sos cuate?',
    input: 'text',
    text: 'Ingresa un nick para ingresar a la sala',
    allowOutsideClick: false,
    inputValidator: (value) => {
        return !value && 'Necesitas un nick para poder chatear'
    }
}).then(nick => {
    user = nick.value
})
box.addEventListener('keyup', (e) => {
    const { key, target } = e
    if(e.key === teclaEnter && EventTarget.value !== ''){
    socket.emit('mensaje', { user, mensaje: target.value})
    box.value = '';
    }
})
socket.on('lista_de_mensaje_actualizada', (data) => {
     app.innerHTML = ''
     data.forEach(chat => {
        const p = document.createElement('p')
        p.innerText = `${chat.user}: ${chat.mensaje}`
        app.appendChild(p)
    })
})
