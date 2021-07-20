import express from 'express';

import './database';
import './shared/container';
import { router } from './routes';

const port = process.env.PORT || 3333;

const app = express();
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
