const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    addReaction,
    updateThought,
    deleteThought,
    removeReaction
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
    .delete(removeReaction)

module.exports = router;