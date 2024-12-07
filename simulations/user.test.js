import Login from "../request/login.request"
import data from '../data/testeData.json'
import { group, sleep } from "k6";

export default function(){
    let login = new Login

    group('Login and get token', () => {
        login.access(data.access.user, data.access.password)
    })

    group('Products', () => {

    })
}