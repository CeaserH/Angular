const mongoose = require("mongoose");
const Cake = mongoose.model("Cake");
const Review = mongoose.model("Review");

module.exports = {

    index: (req, res) => {
        Cake.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    createCake: (req, res) => {
        Cake.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    addReview: (req, res) => {
        Cake.findOne({_id: req.params.id})
            .then((cake) => {
                let newReview = new Review(req.body);

                cake.reviews.push(newReview);
                cake.save()
                    .then((data) => {
                        res.json(data);
                    })
                    .catch((err) => {
                        res.json(err);
                    })
            })
            .catch((err) => {
                res.json(err);
            })

    },

    findCake: (req, res) => {
        Cake.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}