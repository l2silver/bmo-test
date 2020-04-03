import { createSelector } from 'reselect';
export const getRestaurants = createSelector((state)=>state.restaurants, r=>{
  return r;
});