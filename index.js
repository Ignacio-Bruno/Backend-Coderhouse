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


   console.log(Roberto.getFullName());
   console.log(Roberto.countMascotas());
   console.log(Roberto.getMascotas());
   Roberto.addMascotas("Tortuga");
   console.log(Roberto.countMascotas());
   console.log(Roberto.getMascotas());
   Roberto.addBook("The Pragmatic Programmer", "Andy Hunt y Dave Thomas");
   console.log(Roberto.getBookNames());

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

console.log(ignacio.getFullName());
console.log(ignacio.getAge());
console.log(ignacio.getDomicile())
ignacio.addMascota("suricata", "Charlie");
console.log(ignacio.getPets());
