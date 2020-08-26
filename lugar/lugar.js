const axios = require('axios'); // Para manejo de REQUEST a APIs

const getLugar = async(ubicacion) => {

	// Codifico el valor recibido por consola
	let encodedQuery = encodeURI(ubicacion);
	let accessKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

	// Creo la instancia para realizar el REQUEST a la API
	const instancia = axios.create({
		baseURL: `http://api.positionstack.com/v1/forward?access_key=${ accessKey }&query=${ encodedQuery }`,
	  	timeout: 5000
	});

// Realizo el GET a la API
	const respuesta = await instancia.get();

	if (respuesta.data.data.length === 0) {
		throw new Error(`No hay resultados para la ubicación ${ ubicacion } ingresada`);
	} 

	const resultado = respuesta.data.data[0];
	const direccion = resultado.name;
	const latitud 	= resultado.latitude;
	const longitud  = resultado.longitude;

	return {
		direccion,
		latitud,
		longitud
	}

}

module.exports = {
	getLugar
}
