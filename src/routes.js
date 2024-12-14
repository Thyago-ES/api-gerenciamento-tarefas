const taskController = require("./app/controllers/TaskController");

const routes = require("express").Router();

routes.get("/tasks", taskController.getAll);

routes.get("/tasks/:id", taskController.getById);

routes.post("/tasks", taskController.create);

routes.put("/tasks/:id", taskController.update);

routes.delete("/tasks/:id", taskController.drop);

module.exports = routes;
