require("dotenv").config();
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  url: process.env.DB_URL,
  entities: ["./**/*.entity.js"],
  synchronize: process.env.NODE_ENV==="development"?true:false,
  migrations: ["src/database/migrations/*{.ts,.js}"],
  migrationsRun: true,
  ...(process.env.DB_SSL === "true"
    ? {
        ssl: true,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
      }
    : {}),
});
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
