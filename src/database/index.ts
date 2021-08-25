import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';

dotenv.config();

createConnection();

// interface IOptions {
//   host: string;
// }

// async function conn() {
//   await createConnection({
//     name: 'default',
//     type: 'postgres',
//     host: process.env.DB_HOST,
//     port,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB,
//     migrations: ['./src/database/migrations/*.ts'],
//     entities: ['./src/modules/**/entities/*.ts'],
//     cli: {
//       migrationsDir: './src/database/migrations',
//       entitiesDir: './src/modules/**/entities',
//     },
//   });
// }
// conn();

// getConnectionOptions().then((options) => {
//   const newOptions = options as IOptions;
//   newOptions.host = 'database';
//   createConnection({
//     ...options,
//   });
// });
