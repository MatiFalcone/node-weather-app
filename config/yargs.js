const ubicacion = {
	demand: true,
	alias: 'u',
	desc: 'Nombre de la ciudad para obtener el clima'
}

const argv = require('yargs')
				.options({ubicacion})
				.help()
				.argv;
		
module.exports = {
	argv
}