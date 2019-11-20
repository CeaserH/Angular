const mongoose = require("mongoose");
const Task = mongoose.model("Task");

module.exports = {

    index: function(req, res){
        Task.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    view: function(req, res){
        Task.findOne({_id: req.params.id})
            .then(oneTask => res.json(oneTask))
            .catch(err => res.json(err))
    },

    add: function(req, res){
        Task.create( req.body )
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    update: function(req, res){
        Task.updateOne({_id: req.params.id}, req.body, {runValidators: true })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    destroy: function(req, res){
        Task.findByIdAndRemove({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))

    }

}