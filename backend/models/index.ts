import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.ELEPHANTSQL_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Necesario para conexiones SSL con Neon
    },
  },
});

export { sequelize };
