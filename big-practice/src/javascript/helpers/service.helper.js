require('dotenv').config();

export class BookHelper {
  constructor() { }

  /**
   * Uses endpoint to get data by GET method
   * @param {string} endpoint 
   * @returns book list
   */
  async getRequest(endpoint) {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await fetch(process.env.API_HOST + endpoint, options);
    if (!res.ok) {
      throw new Error(`An error has occured: ${res.status}`);
    }
    const result = await res.json();
    return result;
  }

  /**
   * Use endpoint to delete data by DETELE method
   * @param {string} endpoint 
   */
  async deleteRequest(endpoint) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }
    const res = await fetch(process.env.API_HOST + endpoint, options);
    if (!res.ok) {
      throw new Error(`An error has occured: ${res.status}`);
    }
  }

  /**
   * Use enpoint and body to send data to server by POST method
   * @param {string} endpoint 
   * @param {object} body 
   */
  async createRequest(endpoint, body) {
    const requestBody = JSON.stringify(body);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody
    }
    const res = await fetch(process.env.API_HOST + endpoint, options);
    if (!res.ok) {
      throw new Error(`An error has occured: ${res.status}`);
    }
  }

  /**
   * Use enpoint and body to send data to a server to update a resource by PUT method 
   * @param {string} endpoint 
   * @param {object} body 
   */
  async updateRequest(endpoint, body) {
    const requestBody = JSON.stringify(body);
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody
    }
    const res = await fetch(process.env.API_HOST + endpoint, options);
    console.log('res', res);
    if (!res.ok) {
      throw new Error(`An error has occured: ${res.status}`);
    }
  }
}
