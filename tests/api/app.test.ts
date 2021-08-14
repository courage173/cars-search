import supertest from 'supertest';
import app from '../../src/app';

describe('search test', () => {
  const endpoint = '/api';
  const request = supertest(app);
  it('test server is up and running', async () => {
    const response = await request.get(endpoint);
    expect(response.status).toBe(200);
    expect(response.body.message).toEqual('Service Status - OK');
  });
});
