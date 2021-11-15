const errorHandler = (type: string, code: number, error: Error) => {
	let message: string;
	let statusCode: number = code;

	switch (statusCode) {
		case 403:
			message = `403: ${
				type == 'champion'
					? 'Campeão não econtrado, verifique a championKey'
					: 'Acesso negado, verifique a API Key.'
			}`;
			throw new Error(message);

		case 404:
			message = `404: ${
				type == 'champion' ? 'Campeão' : 'Jogador'
			} não encontrado, verifique o nickname.`;
			throw new Error(message);

		default:
			message = `${statusCode}: Verifique no log o erro retornado.`;
            console.log(error); 
			break;
	}
};

export default errorHandler;
