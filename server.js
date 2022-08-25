const dotenv = require('dotenv');

dotenv.config({
  path: './config.env',
});

const app = require('./app');
const mongoConnect = require('./services/mogno');

const PORT = process.env.PORT || 3000;
async function connectServer() {
  await mongoConnect();
  app.listen(PORT, () => {
    console.log(`Listening to server on port ${PORT}`);
  });
}

connectServer();
