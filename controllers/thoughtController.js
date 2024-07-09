const { Thought, User } = require('../models');

module.exports = {
    // Get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Get a thought
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Create a thought
    async createThought(req, res) {
        try {
            // Create the thought
            const newThought = await Thought.create(req.body);
            
            // Push the created thought's _id to the associated user's thoughts array field
            await User.findByIdAndUpdate(
                req.body.userId,
                { $push: { thoughts: newThought._id } },
                { new: true }
            );
            
            res.status(201).json(newThought);
        } catch (error) {
            res.status(500).send({ message: 'Error creating thought', error: error.message });
        }
    },
    // Delete a thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
            if (!thought) {
                res.status(404).json({ message: 'No thought with that ID' });
            }
            res.json({ message: 'Thought deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Update a thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Add a reaction
    async addReaction(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(
                req.params.thoughtId,
                { $push: { reactions: req.body } }, // Assuming req.body contains the reaction data
                { new: true, runValidators: true }
            );
            if (!thought) {
                return res.status(404).send({ message: 'Thought not found' });
            }
            res.status(200).json(thought);
        } catch (error) {
            res.status(500).send({ message: 'Error adding reaction', error: error.message });
        }
    },
    // Remove a reaction
    async removeReaction(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(
                req.params.thoughtId,
                { $pull: { reactions: { _id: req.params.reactionId } } }, // Use $pull to remove the reaction by reactionId
                { new: true }
            );
            if (!thought) {
                return res.status(404).send({ message: 'Thought not found' });
            }
            res.status(200).json(thought);
        } catch (error) {
            res.status(500).send({ message: 'Error removing reaction', error: error.message });
        }
    },
};