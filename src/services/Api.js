import axios from "axios";

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3000'
    });
  }

  async get(path, headers) {
    return this.api.get(path, {
      headers
    });
  }

  async post(path, body) {
    return this.api.post(path, body);
  }

  async delete(path) {
    return this.api.delete(path);
  }

  async patch(path, body) {
    return this.api.patch(path, body);
  }

  async put(path, body) {
    return this.api.put(path, body);
  }
}

export const API = new Api();
