import { Sequelize } from "sequelize";

const sequelize = new Sequelize("xlsxtopdf", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;

// MANGODB
// dineshbalansrinivasan
// 2AYvizYkJZKD51DO
// mongodb+srv://dineshbalansrinivasan:2AYvizYkJZKD51DO@cluster0.glmho0s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
