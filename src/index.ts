import express, { Request, Response } from 'express';
import NodeCache from 'node-cache';
import dotenv from 'dotenv';

import CalendarificRouter from './routes';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

export const cache = new NodeCache({ stdTTL: 3600 });

app.get('/', (_, res: Response) => {
  res.send('Hello World');
});

app.use('/api/calendarific', CalendarificRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
