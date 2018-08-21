const db = require('../config/db.js');
const Docente = db.docente;


// Listar Docentes existentes en la Base de Datos 
exports.findAll = (req, res) => {
	Docente.findAll().then(docente => {
	  
		console.log(docente);
	  res.render('docentes',{docente})
	});
};

exports.create = (req, res) => {
  //Guardar en la Base de datos
	Docente.create({
	  nombre: req.body.nombre,
	  apellido: req.body.pellido,
	  titulo: req.body.titulo
	}).then(docente => {
		console.log(docente);
		res.redirect('/');
		

	});
};
// Encontrar un docente por su Id
exports.findById = (req, res) => {
	Docente.findById(req.params.docenteId).then(docente => {
		res.send(docente);
	})
};

// Actualizar Un Docente
exports.update = (req, res) => {
	const id = req.params.docenteId;
	Docente.update( { Nombre: req.body.Nombre, Apellido: req.body.Apellido, Titulo: req.body.Titulo },
					 { where: {id: req.params.docenteId} }
				   ).then(() => {
					 res.status(200).send("Docente actualizado con id = " + id);
				   });
};

// Eliminar un docente por su ID
exports.delete = (req, res) => {
	const id = req.params.id;
	db.docente.destroy({
	  where: { id:req.params.id }
	}).then(() => {
	  res.redirect('/');
	});
};
