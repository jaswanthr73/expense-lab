
const request = require('supertest');
const app = require('../index');

describe('Expense backend health endpoint', () => {
  test('GET /health returns 200 and status ok', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});

test('POST /transaction rejects a negative amount', async () => {
  const response = await request(app)
    .post('/transaction')
    .send({
      amount: -100,
      description: 'Test expense',
      category: 'Food'
    });

  expect(response.status).toBe(400);
  expect(response.body.message).toBe('validation failed');
  expect(response.body.errors).toContain(
    'amount must be a positive integer'
  );
});