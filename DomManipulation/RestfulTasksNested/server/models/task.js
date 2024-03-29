const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: {type: String},
    description: { type: String, default: ""},
    completed: { type: Boolean, default: false },
}, { timestamps: true, collection: 'tasks'});

mongoose.model("Task", TaskSchema);