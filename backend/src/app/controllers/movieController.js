const Movie = require('../models/movieModel');
const User = require('../models/userModel');

module.exports = {
    async listAll(req, res) {
        const userId = req.decoded.id;

        const movie = await Movie.find({ userId });

        if (movie.length) {
            res.status(200).json(movie);
        }
        else {
            res.status(400).json({
                message: "Movie not found"
            });
        }

    },

    async listById(req, res) {

        const { movieId } = req.params;
        const userId = req.decoded.id

        const movie = await Movie.findById({ _id: movieId, userId });

        if (movie.length) {
            res.status(200).json(movie);
        }
        else {
            res.status(400).json({
                message: "Movie not found"
            });
        }

    },

    async create(req, res) {
        const { title, popularity, release_date,
            overview, genre_ids, poster_path } = req.body;

        const userId = req.decoded.id;

        const movieExists = await Movie.findOne({ title, userId });

        if (movieExists) {
            const movie = await Movie.create({
                title, popularity, release_date,
                overview, genre_ids, poster_path, userId
            });

            await movie.save();

            const user = await User.findById(userId).select('-password');

            user.movies.push(movie);
            await user.save();

            res.status(201).json({ movie, user })

        }
        else {
            res.status(400).json({
                message: 'Movie already exists'
            });
        }

    },

    async update(req, res) {

        const { title, popularity, release_date,
            overview, genre_ids, poster_path } = req.body;
        const { movieId } = req.params;
        const userId = req.decoded.id;

        const movieExists = await Movie.findOne({ _id: movieId, userId });

        if (movieExists) {
            const movie = await Movie.findByIdAndUpdate({ _id: movieId }, {
                title, popularity, release_date,
                overview, genre_ids, poster_path, userId
            });

            res.status(200).json(movie)
        }
        else {
            res.status(400).json({
                message: "Movie not found"
            });
        }

    },

    async delete(req, res) {

        const { movieId } = req.params;
        const userId = req.decoded.id;

        const movieExists = await Movie.findOne({ _id: movieId, userId });

        if (movieExists) {
            await Movie.findByIdAndDelete({ _id: movieId });

            res.status(204).json({
                message: "Deleted"
            });
        }
        else {
            res.status(400).json({
                message: "Movie not found"
            });
        }

    }
}