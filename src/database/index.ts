import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';

dotenv.config();

// interface IOptions {
//   host: string;
// }

const toNumber: string = process.env.DB_PORT;
const port = parseInt(toNumber, 10);

async function conn() {
  await createConnection({
    name: 'default',
    type: 'postgres',
    host: process.env.DB_HOST,
    port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB,
    migrations: ['./src/database/migrations/*.ts'],
    entities: ['./src/modules/**/entities/*.ts'],
    cli: {
      migrationsDir: './src/database/migrations',
      entitiesDir: './src/modules/**/entities',
    },
  });
}
conn();

// getConnectionOptions().then((options) => {
//   const newOptions = options as IOptions;
//   newOptions.host = 'database';
//   createConnection({
//     ...options,
//   });
// });
