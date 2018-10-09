import request from '../utils/request';
export function requestUrl() {
     return request(`http://www.mocky.io/v2/5b766d7b3000005700848af9`,{
      method: 'GET',
    })
    
  }