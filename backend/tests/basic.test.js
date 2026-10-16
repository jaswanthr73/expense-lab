
const request = require('supertest');
const app = require('../index');

describe('Expense backend health endpoint', () => {
  test('GET /health returns 200 and status ok', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});
