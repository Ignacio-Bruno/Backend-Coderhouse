class persona {
  constructor(nombre, apellido, edad, domicilio, mascota) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
    this.mascota = mascota;
  }

  getNombreCompleto() {
    return `${this.nombre} ${this.apellido}`
  }

  getEdad() {
    return `la edad es: ${this.edad}`;
  }

  getDomicilio() {
    return this.domicilio;
  }

  addMascota(animal, nombreMascota) {
    this.mascota.push({animal: animal, nombreMascota: nombreMascota})
  }

  getMascotas() {
    return this.mascota.map((mascota) => `${mascota.animal} ${mascota.nombreMascota}`)
  }
}

const ignacio = new persona (
  "ignacio",
  "dajos",
  32,
  "Loria 477, Lomas de Zamora",
  [{animal: "perro", nombreMascota: "Moro"}]
);

console.log(ignacio.getNombreCompleto());
console.log(ignacio.getEdad());
console.log(ignacio.getDomicilio())
ignacio.addMascota("suricata", "Charlie");
console.log(ignacio.getMascotas());
