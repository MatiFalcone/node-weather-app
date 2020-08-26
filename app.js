const argv = require('./config/yargs').argv; // Para poder recibir parámetros desde línea de comandos
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(ubicacion) => {

	try {

		let coordenadas = await lugar.getLugar(ubicacion);

		let temperatura = await clima.getClima(coordenadas.latitud, coordenadas.longitud);

		return `La temperatura actual de ${ coordenadas.direccion } es de ${ temperatura } ºC`;

	} catch(error) {

		return `No se pudo recuperar la información de la ubicación ${ ubicacion }`;
	
	}
	
}

getInfo(argv.ubicacion)
	.then(console.log)
	.catch(console.log)