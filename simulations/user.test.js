import { group } from 'k6'
import data from '../data/testeData.json'
import Login from '../request/login.request.js'
import User from '../request/users.request.js'
import Products from '../request/product.request.js'
import Customer from '../request/customer.request.js'

export const options = {
  vus: 5,
  duration: '10s'
}

export default function () {
  const login = new Login()
  const user = new User()
  const products = new Products()
  const customers = new Customer()
  let token

  group('Login', () => {
    token = login.access(data.access.user, data.access.password)
  })

  group('Users', () => {
    user.list(login.getToken())
  })

  group('Products', () => {
    products.create(login.getToken(), data.product.description, data.product.itemPrice, data.product.name)
  })

  group('Customers', () => {
    customers.create(login.getToken(), data.customer.id, data.customer.email, data.customer.firstName, data.customer.lastName, data.customer.phone)
  })
}