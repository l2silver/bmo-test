import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '.';

jest.mock('lodash/debounce',  () => jest.fn((res) => {
  return res;
}));

const setup = (props) => {
  const utils = render(<Input {...props} debounce={0} />)
  const input = utils.getByLabelText(props.label || props.name)
  return {
    input,
    ...utils,
  }
}


let defaultProps;
let wasChanged;
describe('Component:General:Input', ()=>{
  describe('render', ()=>{
    beforeEach(()=>{
      wasChanged = false;
      defaultProps = {
        name: 'example',
        onChange: ()=>{
          wasChanged = true;
        }
      }
    })
    test('it renders', () => {
      const { input } = setup(defaultProps);
      fireEvent.change(input, { target: { value: 'nextValue' } })
      expect(wasChanged).toEqual(true);
    });
  });

})
