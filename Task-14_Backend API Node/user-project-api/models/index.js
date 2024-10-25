// models/index.js
const { Sequelize } = require('sequelize');

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

// Load models
const User = require('./user')(sequelize);
const Project = require('./project')(sequelize);

// Define associations
User.hasMany(Project);
Project.belongsTo(User);

const db = { sequelize, User, Project };

module.exports = db;
