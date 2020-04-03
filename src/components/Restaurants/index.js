import React, { useState, memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { get } from 'lodash';
import Input from '../general/Input';
import * as services from '../../services/restaurants';
import { getRestaurants } from '../../selectors/restaurants';
import { byCity } from '../../actions/restaurants';
import RestaurantListItem from './ListItem';
import './index.css';

export const Restaurants = memo(function Restaurants(props) {
  const [ filter, setFilter ] = useState('');
  const [ city, setCity ] = useState('');
  const [ error, setError ] = useState('');
  const search = (c)=>{
    setCity(c);
    if(c){
      props.search(c).then(()=>{
        setError('')
      })
      .catch((err)=>{
        setError(err.statusText);
      });
    }
  }
  let restaurants = get(props, `restaurants.${city}`, []);
  if(filter){
    restaurants = restaurants.filter(restaurant => {
      const rProps = ['name', 'address', 'area'];
      let found;
      while(rProps.length && !found){
        if(restaurant[rProps.pop()].includes(filter)){
          found = true;
        }
      }
      return found;
    })
  }
  return (
    <section className="restaurants__wrapper"  aria-labelledby="restaurants__header">
      <h1 id="restaurants__header">Restaurants By City</h1>
      <div role="contentinfo">
        <p>Search for restaurants by entering a city's name into the city input.Use the refine search to filter out items whose name, address, or area do not match the content in the refine textbox</p>
      </div>
      
      <form>
        <Input onChange={search} name="city" placeholder="Type a city's name here"/>
        <Input onChange={setFilter} name="refine" placeholder="Refine your search" />
      </form>
      {
        error && <div role="alert">Error: 
          {error}
        </div>
      }
      <ul className="restaurants__ul">
        {
          restaurants.map((restaurant, i) => <RestaurantListItem key={i} {...restaurant}/>)
        }
      </ul>
      {
        filter && !restaurants.length && <div role="alert">
        There are no restaurants that match your city and refine criteria.
      </div>
      }
    </section>
  );
});

export const mapStateToProps = createStructuredSelector({
  restaurants: getRestaurants
})

export const mapDispatchToProps = (dispatch)=>({
  search: (city)=>{
    return services.byCity(city)
    .then(({restaurants})=>{
      dispatch(byCity(city, restaurants));
    });
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
