'use strict';

export default class NetUitl {
  static get(url, parseJson=true) {
    return this.request(url, 'get', undefined, parseJson);
  }

  static post(url, body, parseJson=true) {
    return this.request(url, 'post', body, parseJson);
  }

  static request(url, method, body, parseJson) {
    __DEV__ && console.log("#REQUEST# NetUitl ["+method+"] url = "+url+", body = "+body);
    let isOk;
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: method,
        body: body
      })
      .then((response) => {
        isOk = !!response.ok;
        if (parseJson) {
          return response.json();
        } 
        return response.text();
      })
      .then((responseData) => {
        __DEV__ && console.log("#RESPONSE# NetUitl ["+method+"] url = "+url+", body = "+body+", isOk="+isOk+", responseData="+responseData);
        if (isOk) {
          resolve(responseData);
        } else {
          reject(responseData);
        }
      })
      .catch((error) => {
        __DEV__ && console.log("#RESPONSE# NetUitl ["+method+"] url = "+url+", body = "+body+", error="+error);
        reject(error);
      });
    });
  }
}