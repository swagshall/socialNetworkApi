const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    addReaction,
    updateThought,
    deleteThought,
    deleteReaction
} = require('../../controllers/thoughtController')

router
    .route('/')
    .get(getThoughts)
    .post(createThought)

router
    .route('/:id')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

router
    .route('/:thoughtId/reactions')
    .post(addReaction)

router
    .route('/:thoughtId/:reactionId')
    .delete(deleteReaction)

module.exports = router;