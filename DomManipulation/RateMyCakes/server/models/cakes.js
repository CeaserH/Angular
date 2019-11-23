const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    rating: Number,
    desc: String
});

const CakeSchema = new mongoose.Schema({
    baker: String,
    img: String,
    reviews: [ReviewSchema]
});

mongoose.model("Cake", CakeSchema);
mongoose.model("Review", ReviewSchema);