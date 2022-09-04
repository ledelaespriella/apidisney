import CharacterModel from '../model/user.model.js';

// ** CRUD** //

// Show all characters
const getAllCharacters = async (req, res) => {
    try {
        const name = req.query.name;
        const age = req.query.age;
        const movie = req.query.movies;
        if (name) {
            const characters = await CharacterModel.findAll({
                where: { name: `${name}` },
            });
            res.json(characters);
        } else if (age) {
            const characters = await CharacterModel.findAll({
                where: { age: req.query.age },
            });
            res.json(characters);
        } else if (movie) {
            const characters = await CharacterModel.findAll({
                where: { moviesId: req.query.movies },
            });
            res.json(characters);
        } else {
            const characters = await CharacterModel.findAll({
                attributes: ['name', 'image'],
            });
            res.json(characters);
        }
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Show one character
const getCharacter = async (req, res) => {
    try {
        const character = await CharacterModel.findAll({
            where: { id: req.params.id },
        });
        res.json(character[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Create Character
const createCharacter = async (req, res) => {
    try {
        await CharacterModel.create(req.body);
        res.json({ message: 'record created successfully' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Update Character
const updateCharacter = async (req, res) => {
    try {
        await CharacterModel.update(req.body, {
            where: { id: req.params.id },
        });
        res.json({ message: 'record updated successfully' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Delete Character
const deleteCharacter = async (req, res) => {
    try {
        await CharacterModel.destroy({
            where: { id: req.params.id },
        });
        res.json({ message: 'record updated successfully' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export {
    getAllCharacters,
    getCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter,
};
