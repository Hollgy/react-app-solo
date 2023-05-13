import { url, shopId } from './constants.js'

async function getProducts() {

    const response = await fetch(url + '?action=get-products&shopid=' + shopId)
    const data = await response.json()
    console.log("svar från api ", data);
}
// getProducts()