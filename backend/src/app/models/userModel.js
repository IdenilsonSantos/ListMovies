const { model, Schema } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    movies: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Movie'
        }
    ]
});

userSchema.pre('save', async function (next) {
    if (this.password) {
        this.password = await bcrypt.hash(this.password, 8)
    }
    next();
});

module.exports = model('User', userSchema);