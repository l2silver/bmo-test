import { ACTION_TYPES } from '../../reducers/restaurants';

export const byCity = (city, restaurants)=>({
  type: ACTION_TYPES.BY_CITY,
  payload: {
    city,
    restaurants
  }
});