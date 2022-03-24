const { Thought, User, Reaction } = require('../models');
const res = require('express/lib/response');


module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.id })
      .select('-__v')
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thoughts) => res.json(thoughts))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.id })
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thoughts with that ID' })
          : User.findOneAndUpdate( { username: thoughts.username },
            { $pull: { thoughts: req.params.id } })
      )
      .then(() => res.json({ message: 'Thought and user deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },

      //Create reaction 
addReaction({ params, body }, res) {
  Thought.findOneAndUpdate(
      { _id: params.id },
      { $addToSet: { reactions: body } },
      { new: true, runValidators: true }
  )
  .then(thoughts => {
      if (!thoughts) {
          res.status(404).json({ message: 'No thought found with this id' });
          return;
      }
      res.json(ThoughtData);
  })
  .catch(err => res.status(500).json(err));
},

//Delete reaction
deleteReaction({ params, body }, res) {
  Thought.findOneAndUpdate(
      { _id: params.id },
      { $pull: { reactions: { reactionId: body.reactionId } } },
      { new: true, runValidators: true }
  )
  .then(thoughts => {
      if (!thoughts) {
          res.status(404).json({ message: 'No thought found with this id' });
          return;
      }
      res.json({message: 'Reaction deleted'});
  })
  .catch(err => res.status(500).json(err));
},

};

module.exports = thoughtController;
