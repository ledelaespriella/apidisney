import GenderModel from '../model/gender.model.js';

// ** CRUD** //

// Show all gender
const getAllGender = async (req, res) => {
    try {
        const gender = await GenderModel.findAll();
        res.json(gender);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Show one Movies
const getGender = async (req, res) => {
    try {
        const gender = await GenderModel.findAll({
            where: { id: req.params.id },
        });
        res.json(gender[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Create Movies
const createGender = async (req, res) => {
    try {
        await GenderModel.create(req.body);
        res.json({ message: 'record created successfully' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Update Movies
const updateGender = async (req, res) => {
    try {
        await GenderModel.update(req.body, {
            where: { id: req.params.id },
        });
        res.json({ message: 'record updated successfully' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Delete Movies
const deleteGender = async (req, res) => {
    try {
        await GenderModel.destroy({
            where: { id: req.params.id },
        });
        res.json({ message: 'record updated successfully' });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export { getAllGender, getGender, createGender, updateGender, deleteGender };
