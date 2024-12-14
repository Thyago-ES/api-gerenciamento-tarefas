const Task = require("../models/Task");

class TaskController {
	async getAll(req, res) {
		try {
			const tasks = await Task.find();

			return res.status(200).json(tasks);
		} catch (error) {
			return res.status(500).json({ erro: "Erro ao listar tasks: ", error });
		}
	}

	async getById(req, res) {
		try {
			const { id } = req.params;
			const task = await Task.findById(id);

			if (!task) {
				return res.status(404).json({ erro: "Task não encontrada" });
			}

			return res.status(200).json(task);
		} catch (error) {
			return res.status(500).json({ erro: "Erro ao exibir task" });
		}
	}

	async create(req, res) {
		try {
			const task = req.body;
			const newTask = await Task.create(task);

			return res.status(201).json(newTask);
		} catch (error) {
			return res.status(500).json({ erro: "Erro ao criar task" });
		}
	}

	async update(req, res) {
		try {
			const { id } = req.params;
			const task = req.body;

			const updatedTask = await Task.findByIdAndUpdate(id, task);

			if (!updatedTask) {
				return res.status(404).json({ erro: "Task não encontrada" });
			}

			return res.status(200).json(updatedTask);
		} catch (error) {
			return res.status(500).json({ erro: "Erro ao atualizar task" });
		}
	}

	async drop(req, res) {
		try {
			const { id } = req.params;
			const deletedTask = await Task.findByIdAndDelete(id);

			if (!deletedTask) {
				return res.status(404).json({ erro: "Task não encontrada" });
			}

			return res.status(200).json(deletedTask);
		} catch (error) {
			return res.status(500).json({ erro: "Erro ao deletar a task" });
		}
	}
}

module.exports = new TaskController();
