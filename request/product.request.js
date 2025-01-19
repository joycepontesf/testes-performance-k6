import { check } from 'k6'
import http, { request } from 'k6/http'
import Utils from '../utils/utils'

export default class Products {
  create(token, description, itemPrice, name) {
    let response = http.post(`${Utils.getBaseUrl()}/products`, JSON.stringify(
      {
        "description": description,
        "itemPrice": itemPrice,
        "name": name
      }
    ), {
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })

    check(response, {'Should have status code 201': (r) => r.status === 201})
    return JSON.parse(response.body).id
  }
}