const sequelize = require("../config/dbcon");
const User = require("../models/User");
const Division = require("../models/Division");
const District = require("../models/District");
const Upazila = require("../models/Upazila");
const Union = require("../models/Union");

const bcrypt = require("bcrypt");

const resetDb = async () => {
  await sequelize.sync({ force: true });
  console.log("The table for the User model was just (re)created!");

  const user = await User.findOne({ username: "ruhunnabi@gmail.com" });
  const password = await bcrypt.hash("1234", 10);
  if (!user) {
    await User.create({
      firstName: "Baki",
      lastName: "Ruhunnabi",
      username: "ruhunnabi@gmail.com",
      password: password,
    });
  }
};

resetDb();
