const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/obtener-info', (req, res) => {
  res.send('Obtuviste informacion');
}); 

app.get('/', (req, res) => {
  res.send('funca el backend')
})

app.post('/enviar-info', (req, res) => {
  console.log(req.body)
  res.send({
    status: 200,
    message: 'Data enviada!'
  })
})

app.listen(port, () => {
  console.log(`Estamos trabajando en el siguiente link http://localhost:${port}`)
})
