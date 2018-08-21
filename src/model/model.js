module.exports = (sequelize, DataTypes) => {
	const Docente = sequelize.define('docente', {
		id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
    },
	  nombre: {
						type: DataTypes.STRING,
						required: true
	  },
	  apellido: {
						type: DataTypes.STRING,
						required: true
	  },
	  titulo: {
					  type: DataTypes.STRING,
						required: true
	  }
	},
	{
        timestamps: false
	});

	return Docente;
}
