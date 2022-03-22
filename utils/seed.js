const connection = require('../config/connection');
const { user, thoughts } = require('../models');
const { getUser, getThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {console.log('Database connected');

  await user.deleteMany({});

  // Drop existing thoughts
  await thoughts.deleteMany({});


  await user.insertMany(getUser);


  await thoughts.insertMany(getThoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(user);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
