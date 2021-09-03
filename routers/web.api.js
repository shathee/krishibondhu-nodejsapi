const express = require('express')
router = express.Router();

const { Sequelize } = require('sequelize');
const User = require('../models/User')
const District = require('../models/District')
const Division = require('../models/Division')
const Upazila = require('../models/Upazila')

const dbc = require('../config/dbcon')


router.get('/', (req, res) => {
res.send('Hello API Home!')
});
router.get('/divisions', async (req, res) => {
    const divisions = await Division.findAll({
        attributes: ['name', 'name_bn']
      });
    res.json(divisions)
});


module.exports = router