const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  '', // TODO: database connection string
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

// Database initialization
async function initDatabase() {
  try {
    await sequelize.authenticate()
    console.log('✓ Database connection established')

    await sequelize.sync()
    console.log('✓ Models synchronized')

    // Import and execute seeder
    const initializeData = require('./seeders/init-data')
    await initializeData()
  } catch (error) {
    console.error('Error during database initialization:', error)
  }
}

initDatabase()

module.exports = sequelize
