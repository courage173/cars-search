import supertest from 'supertest';
import app from '../../src/app';

describe('server test', () => {
  const endpoint = '/v1/api';
  const request = supertest(app);
  it('test server is up and running', async () => {
    const response = await request.get(endpoint);
    expect(response.status).toBe(200);
    expect(response.body.message).toEqual('Service Status - OK');
  });
  it('test correct message is returned when an invalid endpoint is passed in', async () => {
    const response = await request.get('/random-url');
    expect(response.status).toBe(404);
    expect(response.body.message).toEqual('Not Found');
  });
});
