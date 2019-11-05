import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:9999/'

export class Api {
  static getInstance() {
    return new Api()
  }

  get (url) {
    return axios.get(url)
  }

  put (url, data) {
    return axios.put(url, data)
  }

  post (url, data) {
    return axios.post(url, data)
  }

  delete (url) {
    return axios.delete(url)
  }
}