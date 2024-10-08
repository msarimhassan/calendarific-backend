import { Request, Response } from 'express';

import { fetchHolidays, fetchCountries } from '../utils';
import { cache } from '..';

const getHolidays = async (req: Request, res: Response) => {
  const { country, year } = req.query;

  // Country and year are required
  if (!country || !year) {
    return res.status(400).json({ error: 'Country and year are required' });
  }

  //Check if the data is cached or not
  const cacheKey = `${country}-${year}`;

  const cachedData = cache.get(cacheKey);

  // if cached data is available, return it
  if (cachedData) {
    return res.status(200).json({ message: 'Cached Data Successfull', holidays: cachedData });
  }

  try {
    const holidays = await fetchHolidays(country as string, year as string);
    res.status(200).json({ message: 'Successfull', holidays });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

const getCountries = async (req: Request, res: Response) => {
  const cachedData = cache.get('countries');
  if (cachedData) {
    return res.status(200).json({ message: 'Cached Data Successfull', countries: cachedData });
  }

  try {
    const countries = await fetchCountries();
    res.status(200).json({ message: 'Successfull', countries });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

const CalendarificController = {
  getHolidays,
  getCountries,
};

export default CalendarificController;
