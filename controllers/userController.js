// Method to add a friend
exports.addFriend = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            { $addToSet: { friends: req.params.friendId } }, // Use $addToSet to avoid duplicates
            { new: true }
        );
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send({ message: 'Error adding friend', error: error.message });
    }
};

// Method to remove a friend
exports.removeFriend = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            { $pull: { friends: req.params.friendId } }, // Use $pull to remove the friendId from the array
            { new: true }
        );
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send({ message: 'Error removing friend', error: error.message });
    }
};