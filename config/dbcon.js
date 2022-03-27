const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("kb", "root", "root", {
  dialect: "postgres",
  port: 5432,
  dialectOptions: {
    // Your mariadb options here
    connectTimeout: 1000,
  },
});

async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = sequelize;
