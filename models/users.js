const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const users = new Schema({
    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    name: {
        type: String,
        trim: true,
        required: "Name is required"
    },

    boolean: Boolean,

    array: Array,

    date: {
        type: Date,
        default: Date.now
      },
    
})
users.validPassword = function(password){
    return bcrypt.compareSync(password, this.password)
}

users.addHook("beforeCreate", (user) => {
    user.password = bcrypt.hashSync(
        user.password,
        bcrypt.genSaltSync(10),
        null
    )
})
const Users = mongoose.model("Users", users)

module.exports = Users