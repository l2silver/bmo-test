import { fetch } from 'whatwg-fetch';
import { url } from '../../utils/services';

export function byCity(city){
  return fetch(url(`restaurants?city=${city}`)).then(resp => {
    if(resp.status < 300){
      return resp.json()
    }
    throw resp;
  }).then((json)=>{
    return json;
  });
}