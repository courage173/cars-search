import { Request } from 'express';
declare interface Listing extends Request {
  id: number;
  make: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
}
