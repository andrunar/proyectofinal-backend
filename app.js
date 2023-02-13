const express = require('express');
const app = express();
require('dotenv').config()
const port= process.env.PORT;


app.get('/obtenerinformacion'),(res,req) =>(
  res.send('Obtuviste informacion')
)
app.listen(port, () => {
  console.log(`Estamos trabajando en el siguiente link http://localhost:${port}`)
})

