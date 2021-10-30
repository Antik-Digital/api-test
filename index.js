/* eslint-disable new-cap */
require('dotenv').config();

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
const logger = require('./middleware/loggerMiddleware');
const DBUsers = require('./users');

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(logger);
app.use('/API', router);


router.route('/users').get((request, response) => {
  DBUsers.getUsers().then((result) => {
    response.json(result);
  });
});

router.route('/users/:id').get((request, response) => {
  DBUsers.getUserById(request.params.id).then((result) => {
    response.json(result);
  });
});

app.get('/', (request, response) => {
  DBUsers.getUsers().then((result) => {
    response.json(result);
  });
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
