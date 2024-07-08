const express = require('express');
const router = express.Router();
const ThoughtController = require('../controllers/ThoughtController');

// GET to get all thoughts
router.get('/api/thoughts', ThoughtController.getAllThoughts);

// GET to get a single thought by its _id
router.get('/api/thoughts/:id', ThoughtController.getThoughtById);

// POST to create a new thought and push the created thought's _id to the associated user's thoughts array field
router.post('/api/thoughts', ThoughtController.createThought);

// PUT to update a thought by its _id
router.put('/api/thoughts/:id', ThoughtController.updateThoughtById);

// DELETE to remove a thought by its _id
router.delete('/api/thoughts/:id', ThoughtController.deleteThoughtById);

// POST to create a reaction stored in a single thought's reactions array field
router.post('/api/thoughts/:thoughtId/reactions', ThoughtController.addReaction);

// DELETE to pull and remove a reaction by the reaction's reactionId value
router.delete('/api/thoughts/:thoughtId/reactions/:reactionId', ThoughtController.removeReaction);

module.exports = router;