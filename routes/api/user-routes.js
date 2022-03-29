const router = require('express').Router();
const {
    getUser,
    getSingleUser,
    createUser,
    addFriend,
    updateUser,
    deleteUser,
    deleteFriend
} = require('../../controllers/userController');

router
    .route('/')
    .get(getUser)
    .post(createUser);

router
    .route('/:id')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)
    

router
    .route('/:userId/friends/:friendId')
    .post(addFriend)

router
    .route('/:userId/friends/:friendId')
    .delete(deleteFriend)

module.exports = router;