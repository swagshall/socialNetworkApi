// const { Thought, User, Reaction } = require('../models');
// const res = require('express/lib/response');


// module.exports = {
//     //Create reaction 
// addReaction({ params, body }, res) {
//     Thought.findOneAndUpdate(
//         { _id: params.id },
//         { $addToSet: { reactions: body } },
//         { new: true, runValidators: true }
//     )
//     .then(thoughts => {
//         if (!thoughts) {
//             res.status(404).json({ message: 'No thought found with this id' });
//             return;
//         }
//         res.json(ThoughtData);
//     })
//     .catch(err => res.status(500).json(err));
// },

// //Delete reaction
// deleteReaction({ params, body }, res) {
//     Thought.findOneAndUpdate(
//         { _id: params.id },
//         { $pull: { reactions: { reactionId: body.reactionId } } },
//         { new: true, runValidators: true }
//     )
//     .then(thoughts => {
//         if (!thoughts) {
//             res.status(404).json({ message: 'No thought found with this id' });
//             return;
//         }
//         res.json({message: 'Reaction deleted'});
//     })
//     .catch(err => res.status(500).json(err));
// },
// }

// module.exports = reactionController;