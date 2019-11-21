const mongoose = require("mongoose");

const PokeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String},
    abilities: { type: String, default: ""}
}, { timestamps: true, collection: "pokemons" });

mongoose.model("Pokemon", PokeSchema);