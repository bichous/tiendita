const { model, Schema } = require('mongoose')

const profileSchema = new Schema({
    name: String,
    img: {
        type: String,
        default: 'https://img.icons8.com/clouds/2x/user.png'
    }
}, {
    timestamps: true
}, {})

module.exports = model('Profile', profileSchema)