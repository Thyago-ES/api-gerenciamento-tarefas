const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../../src/app.js");
const Task = require("../../src/app/models/Task.js");

describe("Rotas de Task", () => {
	const testId = "675cc599e60ed21fb22cea48";
	const wrongTestId = "675cc599e60ed21fb22cea44";

	beforeAll(async () => {
		await mongoose.connect("mongodb://localhost:27017/api_com_testes");
	});

	afterAll(async () => {
		await Task.deleteMany({ title: "Nova task" });
		await mongoose.disconnect();
	});

	describe("GET /tasks", () => {
		test("Deve listar todas as tasks", async () => {
			const response = await request(app).get("/tasks");

			expect(response.status).toBe(200);
		});
	});

	describe("GET /tasks/:id", () => {
		test("Deve exibir a task com o id fornecido", async () => {
			const response = await request(app).get(`/tasks/${testId}`);

			expect(response.status).toBe(200);
		});

		test("Deve não encontrar a task", async () => {
			const response = await request(app).get(`/tasks/${wrongTestId}`);

			expect(response.status).toBe(404);
		});
	});

	describe("POST /tasks", () => {
		const newTask = {
			title: "Nova task",
			description: "Descrição nova task",
			check: false,
		};

		const wrongNewTask = {
			title: "Nova task",
		};

		test("Deve criar uma task", async () => {
			const response = await request(app).post("/tasks").send(newTask);

			expect(response.status).toBe(201);
		});

		test("Deve falhar na criação da task", async () => {
			const response = await request(app).post("/tasks").send(wrongNewTask);

			expect(response.status).toBe(500);
		});
	});

	describe("PUT /tasks/:id", () => {
		const updateTask = {
			description: "Descrição atualizada",
		};

		const wrongUpdateTask = {
			check: "deu erro",
		};

		test("Deve atualizar uma task", async () => {
			const response = await request(app)
				.put(`/tasks/${testId}`)
				.send(updateTask);

			expect(response.status).toBe(200);
		});

		test("Deve não encontrar a task de atualização", async () => {
			const response = await request(app)
				.put(`/tasks/${wrongTestId}`)
				.send(updateTask);

			expect(response.status).toBe(404);
		});

		test("Deve não atualizar a task", async () => {
			const response = await request(app)
				.put(`/tasks/${testId}`)
				.send(wrongUpdateTask);

			expect(response.status).toBe(500);
		});
	});

	describe("DELETE /tasks/:id", () => {
		const deleteTask = {
			title: "Nova task",
			description: "Task para deleção",
			check: false,
		};

		test("Deve deletar uma task", async () => {
			const task = await Task.create(deleteTask);

			const response = await request(app).delete(`/tasks/${task.id}`);

			expect(response.status).toBe(200);
		});

		test("Deve não encontrar a task de deleção", async () => {
			const response = await request(app).delete(`/tasks/${wrongTestId}`);

			expect(response.status).toBe(404);
		});
	});
});
