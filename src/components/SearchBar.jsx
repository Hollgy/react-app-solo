import { useState } from "react"
import { SlMagnifier } from "react-icons/sl"
import { productState } from "../atoms/productAtom"
import { useRecoilState } from "recoil"

const SearchBar = ({ }) => {
    const [product, setProduct] = useRecoilState(productState)
    const [searchInput, setSearchInput] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value.toLowerCase())
    }
    const filteredProducts = product.filter((product) => {
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


