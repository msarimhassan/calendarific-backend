import axios from 'axios';
import { cache } from '..';

export const fetchHolidays = async (country: string, year: string) => {
  try {
    const response = await axios.get('https://calendarific.com/api/v2/holidays', {
      params: {
        api_key: process.env.CALENDARIFIC_API_KEY,
        country,
        year,
      },
    });

    const holidays = response.data.response.holidays;

    const cacheKey = `${country}-${year}`;
    // Cache the data
    cache.set(cacheKey, holidays);

    return holidays;
  } catch (error) {
    throw new Error('Error fetching holidays');
  }
};

export const fetchCountries = async () => {
  try {
    const response = await axios.get('https://calendarific.com/api/v2/countries', {
      params: {
        api_key: process.env.CALENDARIFIC_API_KEY,
      },
    });

    const countries = response.data.response.countries;

    // Cache the data
    cache.set('countries', countries);

    return countries;
  } catch (error) {
    throw new Error('Error fetching countries');
  }
};
