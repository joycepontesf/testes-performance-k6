import { check } from 'k6'
import http, { request } from 'k6/http'
import Utils from '../utils/utils'

export default class Customer {
  create(token, id, email, firstName, lastName, telephone) {
    let response = http.post(`${Utils.getBaseUrl()}/customers`, JSON.stringify(
      {
        "address": {
          "id": id
        },
        "email": email,
        "firstName": firstName,
        "lastName": lastName,
        "phone": telephone
      }
    ), {
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })

    check(response, {
      'Should have status code 201': (r) => r.status === 201,
    })
  }
}