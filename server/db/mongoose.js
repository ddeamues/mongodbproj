var mongoose = require('mongoose');

//You want to use the built-in promise way vs our way of creating promise

mongoose.promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
    mongoose
};