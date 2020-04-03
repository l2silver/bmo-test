import React from 'react';
import { render } from '@testing-library/react';
import RestaurantListItem from '.';

describe('Component:RestaurantListItem', ()=>{
  test('renders name address and area of restaurant', () => {
    const restaurant = {
      name: 'Default Name',
      address: 'Default Address',
      area: 'Default Area',
    }
    const { getByText } = render(<RestaurantListItem {...restaurant} />);
    for(let prop in restaurant){
      const element = getByText(restaurant[prop]);
      expect(element).toBeInTheDocument();
    }
  });  
})
