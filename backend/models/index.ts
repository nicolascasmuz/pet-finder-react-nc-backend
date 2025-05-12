import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.ELEPHANTSQL_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export { sequelize };
