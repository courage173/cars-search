import db from '../database/listing.json';
import { ISearchResponse, ISearchCriteria } from '../types/search';

export default class SearchService {
  public static search(query: ISearchCriteria): Promise<ISearchResponse[] | []> {
    const data = db.cars;
    return new Promise((resolve, reject) => {
      const make = query.make;
      const model = query.model;
      const minYear = query.minYear;
      const maxYear = query.maxYear;
      const minPrice = query.minPrice;
      const maxPrice = query.maxPrice;

      if (maxYear && minYear && maxYear < minYear) {
        reject('maximum year cannot be less than the minimum year');
      }
      if (maxPrice && minPrice && maxPrice < minPrice) {
        reject('maximum price cannot be less than the minimum price');
      }
      const result = [];
      for (let i = 0; i < data.length; i++) {
        const car = data[i];
        let insert: Boolean = true;
        //search if the make criteria matches
        if (make && !make.toLowerCase().includes(car.make.toLowerCase())) {
          insert = false;
          continue;
        }
        //search if the model criteria matches
        if (model && !model.toLowerCase().includes(car.model.toLowerCase())) {
          insert = false;
          continue;
        }
        //check if the year is less than the min year
        if (minYear && car.year < minYear) {
          insert = false;
          continue;
        }
        //check if the year is greater than max year
        if (maxYear && car.year > maxYear) {
          insert = false;
          continue;
        }

        //check if the price is lesser than min if present
        if (minPrice && car.price < minPrice) {
          insert = false;
          continue;
        }
        //check if the price is greater than max if present
        if (maxPrice && car.price > maxPrice) {
          insert = false;
          continue;
        }
        if (insert) {
          result.push(car);
        }
      }
      resolve(result);
    });
  }
}
