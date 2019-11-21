const mongoose = require("mongoose");
const Pokemon = mongoose.model("Pokemon");

module.exports = {

    index: function(req, res){
        Pokemon.find({})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}