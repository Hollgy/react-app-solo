import { useState } from "react"
import { SlMagnifier } from "react-icons/sl"
import productList from "../data/data"

const SearchBar = ({ }) => {
    const [searchInput, setSearchInput] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        setSearchInput()
        setSearchInput(e.target.value.toLowerCase())
    }
    const filteredProducts = productList.filter((product) => {
        return product.name.toLowerCase().match(searchInput)
    })

    return (
        <>
            <section>
                <div>
                    <SlMagnifier />
                    <input type="search" placeholder="Search for a product" onChange={handleChange} value={searchInput} />
                    <ul>
                        {filteredProducts.length === 0 ? (
                            <p>Sorry, We dont have any products that match your search, try again...</p>
                        ) : (
                            filteredProducts.map((product, index) => {
                                return (
                                    <li key={index} >
                                        <h4>Produkter</h4>
                                        <p>{product.name}</p>
                                        <p>{product.price}</p>
                                        <p>{product.description}</p>
                                        <img className="product-image" src={product.picture} />
                                    </li>
                                )
                            })
                            )}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default SearchBar


