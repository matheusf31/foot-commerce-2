import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';

import './database';

import globalExceptionHandler from './middlewares/globalExceptionHandler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(globalExceptionHandler);

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
