const express = require('express')
const classContainer = require(`./container/contenedor`)

const app = express();
const PORT = 8080

const Container = new classContainer(`products.txt`)

const server = app.listen(PORT,() => {
  console.log(`servidor activo en el puerto: ${PORT}`);
})

app.get("/products", async (req, res) => {

  const prods = await Container.getAll()
  console.log(prods);

  res.send({productos: prods })
})

app.get("/random", async (req, res) => {
  const prods = await Container.getAll()
  const random = parseInt(Math.random()* prods.length)

  res.send({productos: prods[random] })
})

class User {
  constructor(nombre, apellido, libros, mascotas){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

   getFullName() {
     return `${this.nombre} ${this.apellido}`
   }

   addMascotas(mascotas) {
     this.mascotas.push(mascotas);
    }

   countMascotas() {
     return this.mascotas.length;
    }

   getMascotas(){
     return this.mascotas.map((mascotas) => `${mascotas}`);
    }

   addBook(nombre, autor) {
     this.libros.push({nombre: nombre, autor: autor});
    }

   getBookNames() {
     return this.libros.map((libros) => `${libros.nombre}, ${libros.autor}`)
    }
  }
  const Jaimito = new User("Jaimito", "Messi",
   [{nombre: "Leviatán", autor: "Thomas Hobbes"},
   {nombre: "Sofia´s world", autor: "Jostein Gaarder"}
  ], ["Dog", "Cat"]);

class person {
  constructor(nombre, apellido, edad, domicilio, mascota) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
    this.mascota = mascota;
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`
  }

  getAge() {
    return `la edad es: ${this.edad}`;
  }

  getDomicile() {
    return this.domicilio;
  }

  addPet(animal, nombreMascota) {
    this.mascota.push({animal: animal, nombreMascota: nombreMascota})
  }

  getPets() {
    return this.mascota.map((mascota) => `${mascota.animal} ${mascota.nombreMascota}`)
  }
}

const ignacio = new person (
  "ignacio",
  "dajos",
  32,
  "Loria 477, Lomas de Zamora",
  [{animal: "perro", nombreMascota: "Moro"}]
);
