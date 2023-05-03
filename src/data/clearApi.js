import { url, shopId } from "./constants.js";

async function deleteAll() {
    console.log('Preparing to delete...')

    let ids = await getProductIds()

    ids.forEach(async id => {
        const data = { shopid: shopId, productid: id, action: 'delete-product' }
        const options = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        const statusObject = await response.json()
        console.log('Delete status: ', statusObject)
    })
}

async function getProductIds() {
    console.log('Getting products...')
    const response = await fetch(url + '?action=get-products&shopid=' + shopId)
    const data = await response.json()
    console.log('Response from API:', data)
    return data.map(product => product.id)  // [ id1, id2, ... ]
}

// deleteAll()