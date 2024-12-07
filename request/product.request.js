import Utils from "../utils/utils";

export default class Product {
    
    searchProduct(description, qtd, name){
        let response = http.get(`${Utils.getBaseUrl()}/products`, JSON.stringify(
            {
            "description": description,
            "itemPrice": qtd,
            "name": name 
        })
    )
    }
}