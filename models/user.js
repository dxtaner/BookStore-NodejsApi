const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        min:2
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min:2
    },
    password: {
        type: String,
        required: true,
        min:2
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }]
});


UserSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id, name: this.name, email: this.email}, 'secret');
    return token;
};

const User = mongoose.model('User', UserSchema);
module.exports = User;