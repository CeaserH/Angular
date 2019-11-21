const Pokemon = require("./../constrollers/Pokemons")

module.exports = function(app){

    app.get("/pokemons", (req,res) => {
        Pokemon.index(req, res);
    });
}