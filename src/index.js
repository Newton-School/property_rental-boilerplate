const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const propertyController = require('../controllers/propertyController');

dotenv.config();
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  async () => {
    await propertyController.seedData();
    console.log('connected to DB');
  }
);

app.listen(3000, () => console.log('Server running......'));
