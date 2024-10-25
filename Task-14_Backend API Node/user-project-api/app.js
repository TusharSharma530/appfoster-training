// app.js
const express = require('express');
const db = require('./models');

const app = express();
const PORT = 3000;

// Get all users
app.get('/users', async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch users' });
  }
});

// Get projects for a specific user
app.get('/user/:userId/projects', async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await db.User.findByPk(userId, { include: db.Project });

    if (user) {
      res.json(user.Projects);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch projects' });
  }
});

// Start the server
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
