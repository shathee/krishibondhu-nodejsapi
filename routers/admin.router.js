
const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')

const { Sequelize } = require('sequelize');
const AdminJsSequelize = require('@adminjs/sequelize')

// const dbcon = require('../dbcon')
const User = require('../models/User')
// console.log(dbs);

const dbc = require('../dbcon')


AdminJS.registerAdapter(AdminJsSequelize)


const adminJs = new AdminJS({
    databases: [dbc],
    rootPath: '/admin',
    resources: [User]
  })

const router = AdminJSExpress.buildRouter(adminJs)

module.exports = router