import express, { Request, Response } from 'express';

import CalendarificRouter from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_, res: Response) => {
  res.send('Hello World');
});

app.use('/api/calendarific', CalendarificRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
