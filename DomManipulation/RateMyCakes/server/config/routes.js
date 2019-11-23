const cakes = require('../controllers/cake');

module.exports = function(app){
    app.get('/cakes', cakes.index);
    app.get('/cakes/:id', cakes.findCake);
    app.post('/cakes', cakes.createCake);
    app.put('/cakes/:id', cakes.addReview);
}