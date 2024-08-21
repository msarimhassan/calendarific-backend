import request from 'supertest';
import app from '../src';

describe('GET /countries', () => {
  it('should return 200', async () => {
    const response = await request(app).get('/api/calendarific/countries');
    expect(response.status).toBe(200);
  });
});

describe('GET /holidays', () => {
  it('should return 200 and the correct response when valid country and year are provided', async () => {
    const response = await request(app).get('/api/calendarific/holidays?country=US&year=2024');
    expect(response.status).toBe(200);
  });
});
