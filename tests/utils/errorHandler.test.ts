import supertest from 'supertest';
import app from '../../src/app';
import {
  NoDataError,
  NotFoundError,
  BadRequestError,
  InternalError,
  ApiError,
} from '../../src/utils/ErrorHandler';

describe('Error handlers', () => {
  it('it should check NotFoundError Error returns correct response', () => {
    const response = new NotFoundError('Not found error');
    expect(response).toBeInstanceOf(ApiError);
  });
  it('it should check NoData Error returns correct response', () => {
    const response = new NoDataError('Not found error');
    expect(response).toBeInstanceOf(ApiError);
  });
  it('it should check BadRequestError Error returns correct response', () => {
    const response = new BadRequestError('Not found error');
    expect(response).toBeInstanceOf(ApiError);
  });
  it('it should check InternalError Error returns correct response', () => {
    const response = new InternalError('Not found error');
    expect(response).toBeInstanceOf(ApiError);
  });
});
