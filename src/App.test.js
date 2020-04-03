import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import App from './App';

const mockStore = {
  getState: ()=>({}),
  subscribe: ()=>{},
  dispatch: ()=>{},
};


test('renders app without error', () => {
  render(<Provider store={mockStore}><App /></Provider>);
});
