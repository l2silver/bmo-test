import React from 'react';
import { v4 } from 'uuid';
import debounce from 'lodash/debounce';
import './index.css'

export const testId = "Input"
class Input extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
    const onChange = debounce(props.onChange, props.debounce || 500);
    this.handleChange = (event: Event)=>{
      const value = event.target.value;
      onChange(value);
      this.setState({
        value,
      })
    }
    this.uniqueId = v4();
  }
  render(){
    const { props } = this;
    return <div data-testid={testId}>
    <label className="general__input__label"
      htmlFor={this.uniqueId}>{props.label || props.name}</label>
    <input className="general__input__input"
      type="text" placeholder={props.placeholder || props.name}
      id={this.uniqueId}
      name={props.name}
      onChange={this.handleChange}
      value={this.state.value} />
  </div>
  }
}

export default Input;