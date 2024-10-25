// seeders/seed.js
const db = require('../models');

async function seedDatabase() {
  await db.sequelize.sync({ force: true });

  // Create users
  const users = await db.User.bulkCreate([
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
    { name: 'Charlie', email: 'charlie@example.com' }
  ]);

  // Create projects for each user
  const projects = await db.Project.bulkCreate([
    { title: 'Project A', description: 'Description for project A', UserId: users[0].id },
    { title: 'Project B', description: 'Description for project B', UserId: users[0].id },
    { title: 'Project C', description: 'Description for project C', UserId: users[1].id },
    { title: 'Project D', description: 'Description for project D', UserId: users[2].id },
  ]);

  console.log('Database seeded!');
  process.exit();
}

seedDatabase();
