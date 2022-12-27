class ContenedorMemoria {
    constructor() {
        this.mensajes = [
            {email:'name0213@gmail.com', text:'Espacio para escribir'}
        ]
    }

    listar(id) {
        const posicion = this.productos.findIndex(e =>e.id == id )

        if(posicion == -1){
           return ({error: 'El producto no ha sido encontrado'})
       }else{
           return (this.productos[posicion]) 
       }
    }

    listarAll() {
        return this.mensajes
    }

    guardar(obj) {
        this.mensajes.push(obj)

    }

    actualizar(elem, id) {
        const posicion = this.productos.findIndex(e =>e.id == id )
        if(posicion >= 0){
        this.productos[posicion] = elem
        return('Producto actualizado')
        }else{
            return({error:'El producto no ha sido encontrado'})
        }
    }

    borrar(id) {
        const posicion = this.productos.findIndex(e =>e.id == id )
        if(posicion == -1){
            return({error: 'El producto no ha sido encontrado'})
        }else{

          const productoEliminado = this.productos.splice(posicion, 1)
          return({producto:productoEliminado})
        }
    }

    borrarAll() {
        this.productos = []
    }
}

module.exports = ContenedorMemoria
