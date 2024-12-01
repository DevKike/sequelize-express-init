const app = require('./app/app');
const sequelize = require('./db/sequelize.config');

const PORT = 3001;

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate(),
      console.log('Database connected with success'),
      console.log(`Server running on http://localhost:${PORT}`);
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
});
