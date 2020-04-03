import React from 'react';
import { render } from '@testing-library/react';
import { Restaurants, mapStateToProps, mapDispatchToProps } from '.';
import { ACTION_TYPES } from '../../reducers/restaurants';
import { testId } from '../general/Input';


jest.mock('../../services/restaurants',  () => ({
  byCity: jest.fn((res) => {
    return Promise.resolve({restaurants: [{id: 1}]});
  })
}));

describe('Component:Restaurants', ()=>{
  describe('render', ()=>{
    test('has inputs for name and refine', () => {
      const utils = render(<Restaurants />);
      const inputs = utils.queryAllByTestId(testId);
      expect(inputs.length).toEqual(2);
    });
  });
  describe('mapStateToProps', ()=>{
    test('should have restaurants props', ()=>{
      const restaurants = {};
      expect(mapStateToProps({restaurants}).restaurants).toEqual(restaurants)
    })
  })
  describe('mapDispatchToProps', ()=>{
    test('should have search props', ()=>{
      const dispatch = jest.fn(()=>{});
      const dispatchProps = mapDispatchToProps(dispatch);
      const city = 'city';
      return dispatchProps.search(city).then(()=>{
        expect(dispatch).toHaveBeenCalledWith({
          payload: {
            city,
            restaurants: [{id: 1}]
          },
          type: ACTION_TYPES.BY_CITY
        });
      });  
    })
  })
})
