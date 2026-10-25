const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    roll: {
        type: Number,
        required: true,
        unique: true
    }
},{
    timestamps:true
})

const User = mongoose.model("user", userSchema);

module.exports = User