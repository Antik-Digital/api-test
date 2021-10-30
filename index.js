const personas = [
  {
    'id': 1,
    'nombre': 'alan',
    'apellido': 'pikholtz',
  },
  {
    'id': 2,
    'nombre': 'alan',
    'apellido': 'antar',
  },
];

const express = require('express');
const cors = require('cors');
const app = express();
const logger = require('./loggerMiddleware');

app.use(cors());

app.use(express.json());

app.use(logger);


app.get('/', (request, response) => {
  response.send('<h1>Hola Mundo</h1>');
});


app.get('/api/people/:id', (request, response) => {
  const id = Number(request.params.id);
  const persona = personas.find((persona) => persona.id == id);
  if (persona) {
    response.json(persona);
  } else {
    response.status(404).end();
  }
});


app.get('/api/people', (request, response) => {
  response.json(personas);
});

app.use((request, response, next) =>{
  console.log(request.path);
  response.status(404).json({
    error: 'Not found',
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
