// Method to create a new thought
exports.createThought = async (req, res) => {
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
};

// Method to add a reaction
exports.addReaction = async (req, res) => {
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
};

// Method to remove a reaction
exports.removeReaction = async (req, res) => {
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
};