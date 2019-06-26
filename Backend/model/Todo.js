const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Todo schema
const TodoSchema = new Schema({
    desc:{
        type:String,
        required:true
    },
    resp :{
        type:String,
        required:true
    },
    priority :{
        type: String,
        required:true
    },
   
});

module.exports = Todo = mongoose.model('todo',TodoSchema);