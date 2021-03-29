const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    title:String,
    isCompleted:Boolean
});

module.exports = mongoose.model('todos',TodoSchema);