import React, {memo} from 'react';
import './index.css';

export default memo(function RestaurantListItem(props){
  return <li className="restaurants__list-item__wrapper">
    <h2 className="restaurants__list-item__h2">{props.name}</h2><span>, <em>{props.area}</em></span>
    <p>{props.address}</p>
  </li>
});