const Task = require("../controllers/tasks")

module.exports = function(app){

    app.get("/tasks", (req, res) => {
        Task.index(req, res);
    });
    app.get("/task/:id", Task.view);
    app.post("/tasks", Task.create);
    app.put("/task/:id", Task.update);
    app.delete("/task/:id", Task.destroy);

}