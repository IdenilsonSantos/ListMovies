const { model, Schema } = require('mongoose');
const paginate = require('mongoose-paginate');
const bcrypt = require('bcryptjs');

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    popularity: {
        type: Number,
        required: true
    },
    release_date: {
        type: String,
        required: true
    },
    overview: {
        type: String,
    },
    genre_ids: [{
        type: Number,
    }],
    poster_path: {
        type: String,
        require: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

movieSchema.plugin(paginate);

module.exports = model('Movie', movieSchema);