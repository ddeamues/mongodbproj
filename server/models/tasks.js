var mongoose = require('mongoose');

//Good practice to capitalize first letter of model names
var Task = mongoose.model('Task', {

    taskName: {
        //Place different attributes for task behavior
        type: String,
        required: true,
        minlength: 5,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }

});

module.exports = {Task}