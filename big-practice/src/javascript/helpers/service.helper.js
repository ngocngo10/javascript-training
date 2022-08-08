require('dotenv').config();

export class BookHelper {
  constructor() { }

  /**
   *  Function uses endpoint, body (optional) and method to return the requested  result by the user
   * @param {string} endpoint 
   * @param {string} method 
   * @param {object} body 
   * @returns 
   */
  async request(endpoint, method = 'GET', body) {
    const options = {
      method,
      headers: {
        'Content-type': 'application/json',
      }
    }

    if (method === 'POST' || method === 'PUT') {
      options.body = JSON.stringify(body);
    }

    const res = await fetch(process.env.API_HOST + endpoint, options);
    if (!res?.ok) {
      throw new Error(`An error has occured: ${res?.status}`);
    }
    const result = await res?.json();
    return result;
  }

  /**
   * Uses endpoint to get data by GET method
   * @param {string} endpoint 
   * @returns data
   */
  async getRequest(endpoint) {
    return this.request(endpoint);
  }

  /**
   * Use endpoint to delete data by DETELE method
   * @param {string} endpoint 
   */
  async deleteRequest(endpoint) {
    return this.request(endpoint, 'DELETE');
  }

  /**
   * Use enpoint and body to send data to server by POST method
   * @param {string} endpoint 
   * @param {object} body 
   */
  async createRequest(endpoint, body) {
    return this.request(endpoint, 'POST', body);
  }

  /**
   * Use enpoint and body to send data to a server to update a resource by PUT method 
   * @param {string} endpoint 
   * @param {object} body 
   */
  async updateRequest(endpoint, body) {
    return this.request(endpoint, 'PUT', body);
  }
}
