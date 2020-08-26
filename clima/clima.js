const axios = require('axios'); // Para manejo de REQUEST a APIs

const getClima = async(latitud, longitud) => {

// Codifico el valor recibido por consola
	let encodedLatitud = encodeURI(latitud);
	let encodedLongitud = encodeURI(longitud);
	let accessKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

// Realizo el GET a la API
	const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ encodedLatitud }&lon=${ encodedLongitud }&appid=${ accessKey }&units=metric`);

	return respuesta.data.main.temp;

}

module.exports = {
	getClima
}