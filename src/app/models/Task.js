const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		check: {
			type: Boolean,
			default: false,
			required: true,
		},
	},
	{
		timestamps: false,
	}
);

const Task = model("Task", taskSchema);

module.exports = Task;
