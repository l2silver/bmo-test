const defaultState = {
  
}
export const ACTION_TYPES = {
  BY_CITY: 'BY_CITY',
}

export default function (state = defaultState, action){
  switch(action.type){
    case ACTION_TYPES.BY_CITY:
      const {city, restaurants} = action.payload;
      state[city] = restaurants.map(({name, address, area}) => ({
        name,
        address,
        area
      }));
      return {...state};
    default:
      return state;
  }
}