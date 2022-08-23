import CharacterModel from '../model/user.model.js';

// ** CRUD** //

// Show all characters
const getAllCharacters = async (req, res) => {
    try {
        const characters = await CharacterModel.findAll();
        res.json(characters);
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
        res.json(character);
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
