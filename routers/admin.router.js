
const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')

const { Sequelize } = require('sequelize');
const AdminJsSequelize = require('@adminjs/sequelize')

// const dbcon = require('../dbcon')
const User = require('../models/User')
// console.log(dbs);

const sequelize = new Sequelize('test', 'root', 'example', {
    dialect: 'mariadb',
    port: 3307,
    dialectOptions: {
      // Your mariadb options here
      connectTimeout: 1000
    }
  });
const dbs = sequelize.config.database

AdminJS.registerAdapter(AdminJsSequelize)


const adminJs = new AdminJS({
    databases: [sequelize],
    rootPath: '/admin',
    resources: [User]
  })

const router = AdminJSExpress.buildRouter(adminJs)

module.exports = router