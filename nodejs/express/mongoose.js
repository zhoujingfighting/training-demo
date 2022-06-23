const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
mongoose.connect('mongodb://localhost:27017/express-auth', {
    useNewUrlParser: true
})

const User = mongoose.model('User', new mongoose.Schema({
    username: { type: String, unique: true },
    password: {
        type: String, set(val) {
            return bcrypt.hashSync(val, 10)
        }
    }
}))

//User.db.dropCollection('users')
module.exports = { User }