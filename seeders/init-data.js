const User = require('../models/user')

async function initializeData() {
  try {
    // Check if users already exist
    const userCount = await User.count()

    if (userCount === 0) {
      console.log('Initializing data...')

      // Create test user
      await User.create({
        id: 1,
        name: 'John',
        email: 'johndoe@gmail.com',
        password: '$2a$12$chtH/.FdXgsl6BAGV0Mxp.yMvNO41Qe8SNI1WD1rAkuoZUCnHFTum',
        address: '23 Boulevard of Broken Dreams',
        zipcode: '10002',
        city: 'New York',
        country: 'United States'
      })

      console.log('✓ Initial data created successfully')
    } else {
      console.log('✓ Data already exists in database')
    }
  } catch (error) {
    console.error('Error during data initialization:', error)
  }
}

module.exports = initializeData
