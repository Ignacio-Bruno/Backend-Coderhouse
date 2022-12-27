
class ContenedorArchivo {

    constructor() {
        this.productos = [
            {
                title: 'Camara Cannon ',
                price: 7500,
                thumbnail: 'https://cdn2.iconfinder.com/data/icons/electrical-devices-4/60/devices-ultra-041-dslr-256.png',
                id: 1
            }, 
            
            {
                title: 'Guitarra Clasica',
                price: 2350,
                thumbnail: 'https://cdn3.iconfinder.com/data/icons/hipster-ultra/60/Hipster_-_Ultra_-034_-_Guitar-256.png',
                id: 2
            },

            {
                title: 'Replica copa del mundo',
                price: 4360,
                thumbnail: 'https://cdn4.iconfinder.com/data/icons/world-cup-ultra/60/001_-_World_Cup-64.png',
                id: 3
            }
            ]
        this.id = 0
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
        return this.productos
    }

    guardar(prod) {
        let products = this.productos
        let id = 0
        this.productos.length == 0 ? (id=1) : (id=products[products.length-1].id + 1);
        const nuevoProducto = {...prod, id}
        this.productos.push(nuevoProducto)
        return('Producto guardado')
    }

    actualizar(prod, id) {
        const posicion = this.productos.findIndex(e =>e.id == id )
        if(posicion >= 0){
        this.productos[posicion] = prod
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
}





 module.exports = ContenedorArchivo