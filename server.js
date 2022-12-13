const express = require("express");
const bp = require("body-parser");
const router = require("./routers/index");
const app = express();
const PORT = 3000;

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(express.static('public'));
/* en esta parte donde queria buscar el path y renderizar el html, me las rebusque pero le termine pidiendo ayuda a un compañero 
por lo cual creo que funciona pero no se si de la manera más apropiada */
app.use("/api", router);

const server = app.listen(PORT, () => {
    console.log(
        `Servidor analizando en el puerto ${server.address().port}`
    );
    console.log(`http://localhost:${server.address().port}`);
});
server.on("error", error => console.log(`Error en el servidor: ${error}`));