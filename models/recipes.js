const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipes = new Schema({
    // email: {
    //     type: String,
    //     match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    // },
    name: {
        type: String,
        trim: true,
        required: "Name is required"
    },
    ingredients: {
        type: String,
        trim: true,
        required: "List your ingredients"
    },
    cookTime: {
        type: Number,
        required: "Please enter the time to cook"
    },
    temp: {
        type: String,
        required: "Enter a cook temperature"
    },

    boolean: Boolean,

    array: Array,

    date: {
        type: Date,
        default: Date.now
      },
    
})

module.exports = Recipes