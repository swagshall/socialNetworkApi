const connection = require('../config/connection');
const { User, Thoughts } = require('../models');
const { users, thoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {console.log('Database connected');

  await User.deleteMany({});

  // Drop existing thoughts
  await Thoughts.deleteMany({});


  await User.insertMany(getUser);


  await Thoughts.insertMany(getThoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
