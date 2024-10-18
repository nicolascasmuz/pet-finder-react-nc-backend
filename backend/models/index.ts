import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.ELEPHANTSQL_URL);

export { sequelize };
