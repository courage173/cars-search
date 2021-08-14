import supertest from 'supertest';
import app from '../../src/app';
import db from '../../src/database/listing.json';

describe('search test', () => {
  const endpoint = '/api/v1/search';
  const request = supertest(app);
  it('should fetch all data when no search query is passed', async () => {
    const response = await request.get(endpoint);
    expect(response.status).toBe(200);
    expect(response.body.data.length).toEqual(db.cars.length);
  });
  it('should throw error when the maximum year is less than the minimum year', async () => {
    const response = await request.get(`${endpoint}?minYear=2001&maxYear=2000`);
    expect(response.status).toBe(400);
    expect(response.body.message).toEqual('maximum year cannot be less than the minimum year');
  });
  it('should throw error when the maximum price is less than the minimum price', async () => {
    const response = await request.get(`${endpoint}?minPrice=18999&maxPrice=12999`);
    expect(response.status).toBe(400);
    expect(response.body.message).toEqual('maximum price cannot be less than the minimum year');
  });
  it('should search when just make is supplied', async () => {
    const response = await request.get(`${endpoint}?make=honda`);
    expect(response.status).toBe(200);
    expect(response.body.data.length).toEqual(6);
  });
  it('should search when multiple make is supplied', async () => {
    const response = await request.get(`${endpoint}?make=honda,toyota`);
    expect(response.status).toBe(200);
    expect(response.body.data.length).toEqual(10);
  });
  it('should search based on model', async () => {
    const response = await request.get(`${endpoint}?model=civic`);
    expect(response.status).toBe(200);
    expect(response.body.data.length).toEqual(5);
  });
  it('should search based on multiple model type', async () => {
    const response = await request.get(`${endpoint}?model=civic,camry`);
    expect(response.status).toBe(200);
    expect(response.body.data.length).toEqual(6);
  });
  it('should search based on  model and make', async () => {
    const response = await request.get(`${endpoint}?model=civic,camry&make=honda,toyota`);
    expect(response.status).toBe(200);
    expect(response.body.data.length).toEqual(6);
  });
  it('should search based on model,make and minimum year', async () => {
    const response = await request.get(
      `${endpoint}?model=civic,camry&make=honda,toyota&minYear=2012`,
    );
    expect(response.status).toBe(200);
    expect(response.body.data.length).toEqual(4);
  });
  it('should search based on model,make and minimum year and maximum year', async () => {
    const response = await request.get(
      `${endpoint}?model=civic,camry&make=honda,toyota&minYear=2012&maxYear=2018`,
    );
    expect(response.status).toBe(200);
    console.log(response.body.data.length);
    expect(response.body.data.length).toEqual(3);
  });
  it('should search based on model,make and minimum year and maximum year and price', async () => {
    const response = await request.get(
      `${endpoint}?model=civic,camry&make=honda,toyota&minYear=2000&maxYear=2020&maxPrice=6995`,
    );
    expect(response.status).toBe(200);
    expect(response.body.data.length).toEqual(2);
  });
});
