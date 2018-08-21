module.exports = function(app) {
    const docente = require('../controllers/docente.js');
    
    app.get('/', docente.findAll);

    
    //crear un docente
    app.post('/add',docente.create);


    // buscar un docente por su ID
    app.get('/api/docente/:docenteId', docente.findById);
     
    // actualizar un docente por su Id
    app.put('/api/docente/:docenteId', docente.update);
    
    //ELIMINAR UN DOCENTE
    app.get('/delete/:id', docente.delete);
}
