const express = require("express");
const users = require('./users/users')
const router = require("./routers/index");
/* const animals = require('./app/router/animals/animals')*/
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine','ejs')
app.set('views','./app/views')

app.use('/api', users)
app.use('/api/v2', animals)

const server = app.listen(PORT, () => {
  console.log(`App listening on port ${server.address().port}`);
});