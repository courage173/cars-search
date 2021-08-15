export interface ISearchResponse {
  id: number;
  make: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
}

export interface ISearchCriteria {
  make?: string;
  model?: string;
  minYear?: number;
  maxYear?: number;
  minPrice?: number;
  maxPrice?: number;
}
