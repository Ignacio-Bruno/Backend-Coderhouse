const socket = io.connect();
const nombre = document.getElementById('nombre')
const precio = document.getElementById('precio')
const foto = document.getElementById('foto')

const formAñadirProd = document.getElementById('formAñadirProd')
formAñadirProd.addEventListener('submit', e => {
    e.preventDefault()
    const producto = {
        title: nombre.value,
        price: precio.value,
        thumbnail: foto.value
    }

    socket.emit('producto', producto)

    formPublicMsg.reset()
    inputMensaje.focus()
})

socket.on('productos', productos =>{makeHtmlTable(productos)})


function makeHtmlTable(productos) {
    return fetch('plantillas/tabla-productos.hbs')
        .then(respuesta => respuesta.text())
        .then(plantilla => {
            const template = Handlebars.compile(plantilla);
            const html = template({productos} )
            document.getElementById('productos').innerHTML = html
        })
}

const Username = document.getElementById('Username')
const inputMensaje = document.getElementById('inputMensaje')
const btnEnviar = document.getElementById('btnEnviar')



const formPublicMsg = document.getElementById('formPublicMsg')
formPublicMsg.addEventListener('submit', e => {
    e.preventDefault()
   
    const message = {
        email: Username.value,
        text: inputMensaje.value
    }

    socket.emit('message', message)

    formPublicMsg.reset()
    inputMensaje.focus()
})




socket.on('mensajes', mensajes => {
    
    makeHtmlList(mensajes)
})

function makeHtmlList(mensajes) {
    const html = mensajes.map(item =>{
        return (`<div> <strong>${item.email}:  </strong><em>${item.text}</em></div>`)
    }).join(' ')

    document.getElementById('mensajes').innerHTML = html;
}

Username.addEventListener('input', () => {
    const hayEmail = Username.value
    const hayTexto = inputMensaje.value
    inputMensaje.disabled = !hayEmail.length
    btnEnviar.disabled = !hayEmail.length || !hayTexto.length
})

inputMensaje.addEventListener('input', () => {
    const hayTexto = inputMensaje.value
    btnEnviar.disabled = !hayTexto.length
})