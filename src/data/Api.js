// URL: https://www.forverkliga.se/JavaScript/api/fe/?action=get-products&shopid=id

// Get all products
const url = 'https://www.forverkliga.se/JavaScript/api/fe/'
const shopId = 1007 // write your shop id here

async function getProducts() {
	let urlWithQuery = url + '?action=get-products&shopid=' + shopId
	try {
		const response = await fetch(urlWithQuery)
		const data = await response.json()
		return data
	} catch(error) {
		console.log('Use console.log to find out what the error is.')
	}
	return null
}
// Function that returns true if posting was successful
async function uploadProduct() {
	const data = {
		action: 'add-product',
		name: 'Water pistol',
		description: 'Fires cooling streams of water at unsuspecting foes.',
		picture: 'insert web URL here',
		shopid: shopId
	}
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	}
	const response = await fetch(url, options)
	const statusObject = await response.json()
	if( statusObject.stats === 'success' ) {
		return true
	}
	return false  // if you get false, use console.log to inspect the object
}