
const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const bcrypt = require('bcrypt');

const { Sequelize } = require('sequelize');
const AdminJsSequelize = require('@adminjs/sequelize')

const User = require('../models/User')
const District = require('../models/District')
const Division = require('../models/Division')
const Upazila = require('../models/Upazila')

const dbc = require('../config/dbcon')


AdminJS.registerAdapter(AdminJsSequelize)


const adminJs = new AdminJS({
    databases: [dbc],
    rootPath: '/admin',
    // resources: [User]
  })



const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    const user = await User.findOne({ email })
    if (user) {
      const matched = await bcrypt.compare(password, user.password)
      if (matched) {
        return user
      }
    }
    return false
  },
  cookiePassword: 'some-secret-password-used-to-secure-cookie',
})

module.exports = router