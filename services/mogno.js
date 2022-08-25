const mongoose = require('mongoose');

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connection.on('open', () => {
  console.log('Successfully connected to DB');
});

mongoose.connection.on('error', (err) => {
  console.log('DB connection failed');
});

async function mongoConnect() {
  await mongoose.connect(DB);
}

module.exports = mongoConnect;
