const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/TDM');

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

// const update = new mongoose.Schema({
//     id : String
// })

const todo = mongoose.model("todo" , todoSchema);

module.exports = {
    todo : todo
}