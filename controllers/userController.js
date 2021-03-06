const { User, Thought } = require('../models');

const userController = {
  // Get all users
  getUser(req, res) {
    User.find()
      .then(users => {
        res.json(users)
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.id })
        .populate([
            { path: 'thoughts'},
            { path: 'friends'}
        ])
      .then(users =>
        !users
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({users})
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a user
  createUser(req, res) {
    User.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  //update user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true })
        //  body, {
        //       new: true, 
        //       runValidators: true 
        //     })
    .then(users => {
        !users
        ? res.status(404).json({ message: 'No user found with this id' })
        : res.json({users})
    })
    .catch(err => res.status(400).json(err));
},

  // Delete user
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.id })
      .then((users) =>
        !student
          ? res.status(404).json({ message: 'No such user exists' })
          : res.json({ message: 'User deleted' })
      ) 

      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Add friends to user
  addFriend(req, res) {
    console.log('You are adding a friend');
    console.log(req.body);
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId} },
      { runValidators: true, new: true }
    )
      // .then((users) =>
      //   !users
      //     ? res
      //         .status(404)
      //         .json({ message: 'No user found with that ID' })
      //     : User.findOneAndUpdate(
      //       { _id: req.params.friendId },
      //       { $addToSet: { friends: params.userId } },
      //       { new: true, runValidators: true }
      //   )
      //   .then(users2 => {
      //       !users2
      //       ? res.status(404).json({ message: 'No user found with this friend ID' })
      //       : res.json(UserData);  
      //       }
      //       )
      // )
      .catch((err) => res.status(500).json(err));
  },

  //Delete friend
  deleteFriend(req, res) {
        
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { new: true, runValidators: true }
    )
    // .then(users => {
    //     !users
    //     ? res.status(404).json({ message: 'No user found with this friend ID' })
    //     : User.findOneAndUpdate(
    //         { _id: req.params.friendId },
    //         { $addToSet: { friends: params.userId } },
    //         { new: true, runValidators: true }
    //     )
    //     .then(users2 => {
    //         !users2 
    //         ? res.status(404).json({ message: 'No user found with this friend ID' })
    //         : res.json({message: 'Friend successfully deleted'});
    //     })
    
    .catch(err => res.json(err));
}
//)
};

  module.exports = userController;
