import { SearchCriteria } from '../services/searchService';

export default function buildQuery(query: any): SearchCriteria {
  const data: SearchCriteria = {};
  if (query.model) {
    data.model = query.model;
  }
  if (query.make) {
    data.make = query.make;
  }
  if (query.minYear) {
    data.minYear = Number(query.minYear);
  }
  if (query.maxYear) {
    data.maxYear = Number(query.maxYear);
  }
  if (query.minPrice) {
    data.minPrice = Number(query.minPrice);
  }
  if (query.maxPrice) {
    data.maxPrice = Number(query.maxPrice);
  }

  return data;
}
