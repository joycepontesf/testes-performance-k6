import { check } from 'k6'
import http, { request } from 'k6/http'
import Utils from '../utils/utils'

export default class Login {
  #token

  access(user, password) {
    let response = http.post(`${Utils.getBaseUrl()}/login`, JSON.stringify(
      {
        "username": user,
        "password": password
      }
    ), {
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    })
    this.#token = response.json('accessToken')

    check(response, {
      "Should have status code 201": (r) => r.status == 201
    })
  }
  
  getToken() {
    return this.#token
  }
}