const { Router } = require('express');
const DevController = require('./controllers/DevController')

const routes = Router();

// HTTP methods (GET, POST, PUT, DELETE)
// Params
// Query params (/users?search=blah): request.query
// Route params (/users/:id): request.param
// Body (json, xml ..) : request.body

// routes.post('/', (request, response) => {
//     console.log(request.body);
//     return response.json({
//         message: 'Hello World'
//     });
// });

routes.post('/devs', DevController.save);

module.exports = routes;