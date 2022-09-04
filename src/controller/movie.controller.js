import MovieModel from '../model/movie.model.js';

// ** CRUD** //

// Show all movies
const getAllMovies = async (req, res) => {
    try {
        const name = req.query.name;
        const gender = req.query.gender;
        const order = req.query.order;
        if (name) {
            const movies = await MovieModel.findAll({
                where: { title: `${name}` },
            });
            res.json(movies);
        } else if (gender) {
            const movies = await MovieModel.findAll({
                where: { genderId: req.query.gender },
            });
            res.json(movies);
        } else if (order) {
            const movies = await MovieModel.findAll({
                order: ['creationDate', `${order}`],
            });
            res.json(movies);
        } else {
            const movies = await MovieModel.findAll({
                attributes: ['image', 'title', 'creationDate'],
            });
            res.json(movies);
        }
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Show one Movies
const getMovie = async (req, res) => {
    try {
        const movie = await MovieModel.findAll({
            where: { id: req.params.id },
        });
        res.json(movie[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Create Movies
const createMovie = async (req, res) => {
    try {
        await MovieModel.create(req.body);
        res.json({ message: 'record created successfully' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Update Movies
const updateMovie = async (req, res) => {
    try {
        await MovieModel.update(req.body, {
            where: { id: req.params.id },
        });
        res.json({ message: 'record updated successfully' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Delete Movies
const deleteMovie = async (req, res) => {
    try {
        await MovieModel.destroy({
            where: { id: req.params.id },
        });
        res.json({ message: 'record updated successfully' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export { getAllMovies, getMovie, createMovie, updateMovie, deleteMovie };
