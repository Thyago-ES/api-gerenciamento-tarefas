const mongoose = require("mongoose");

class Database {
	constructor() {
		this.main();
	}

	async main() {
		try {
			await mongoose.connect("mongodb://localhost:27017/api_com_testes");

			console.log("Banco de dados conectado");
		} catch (error) {
			console.log("Falha na conexão com o banco de dados");
		}
	}
}

module.exports = new Database();
